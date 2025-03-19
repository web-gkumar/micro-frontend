import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud.service';
import { FormDataService } from '../../../../shared/services/form-fields';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
    selector: 'app-forms',
    imports: [MatIconModule, CommonModule, RouterModule],
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  allForms:any = [];
  filter: any;

  constructor(
    private _crudService: CrudService,
    private _formFiedls: FormDataService
  ){}

  ngOnInit(): void {
    this.getAllForms();
  }

  getAllForms() {
    this._crudService.getAllForms().subscribe(data => {
      this.allForms = data.data.reverse();
    })
  }

  addForm() {
    if (confirm("Do You Want Create New Forms ?") == true) {
      let formFields = this._formFiedls.getFormConfig();
      formFields['formName'] = `Form Name${this.allForms.length+1}`;
      formFields['pojo'] = 'app_forms'
      formFields.formControls = [];
      this._crudService.createForms(formFields).subscribe(data => {
        this.getAllForms();
      })
    }
  }

  formDelete(formlist:any) {
    if (confirm("Do You Want Delete Forms ?") == true) {
      this._crudService.deleteForms(formlist._id).subscribe(data => {
        this.getAllForms();
      })
    }
  }

}
