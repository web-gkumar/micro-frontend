import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CrudService } from '../../../shared/services/crud.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormDataService } from '../../../shared/services/form-fields';


@Component({
  selector: 'app-create',
   imports: [RouterModule, CommonModule, FormsModule, MatIconModule, MatTabsModule, CdkAccordionModule, MatButtonToggleModule, MatAutocompleteModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  allForms:any = [];
  filter: any;
  moduleList: any = [];
  moduleinTabs?: string;
  

   constructor(
      private _crudService: CrudService,
      private _formFiedls: FormDataService
    ){}


    ngOnInit(): void {
      this.getAllForms();
      this.getModule();
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


  getAllForms() {
    this._crudService.getAllForms().subscribe(data => {
      this.allForms = data.data.reverse();
    })
  }

  formDelete(formlist:any) {
    if (confirm("Do You Want Delete Forms ?") == true) {
      this._crudService.deleteForms(formlist._id).subscribe(data => {
        this.getAllForms();
      })
    }
  }




  createModule() {
    let moduleList: any = { 
      "moduleName": "Module",
      "moduleIcon": "home",
      "moduleForm": "",
      "menulist": []
    }
    this._crudService.createModules(moduleList).subscribe((data: any) => {
      this.getModule();
    })
  }

  getModule() {
    this._crudService.getAllModules().subscribe((data: any) => {
      this.moduleList = data.data;
    })
  }

  saveModule(data: any) {
    this._crudService.updateModule(data._id, data).subscribe((data: any) => {
      this.getModule();
    });
  }


  deleteModule(data: any) {
    if (confirm("Do want to delete ?") == true) {
      this._crudService.deleteModules(data._id).subscribe((data: any) => {
        this.getModule();
      });
    }
  }


}
