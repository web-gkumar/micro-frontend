import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { CrudService } from '../../../../shared/services/crud.service';
import { FormDataService } from '../../../../shared/services/form-fields'
import { FilterPipe } from "../../../../shared/pipes/filter.pipe";

@Component({
  selector: 'app-create-forms',
  imports: [RouterModule, MatIconModule, FormsModule, FilterPipe],
  templateUrl: './create-forms.component.html',
  styleUrl: './create-forms.component.scss'
})
export class CreateFormsComponent {

  allForms:any;
  filterSearch:any;

  constructor( private _crudService:CrudService, private _formFiedls:FormDataService){}
  
  ngOnInit(): void {
    this.getAllForms();
   }
 
 
   addForm() {
     if (confirm("Do You Want Create New Forms ?") == true) {
       let formFields = this._formFiedls.getFormConfig();
       formFields['formName'] = `Form Name${this.allForms.length + 1}`;
       formFields['pojo'] = 'app_forms'
       formFields.formControls = [];
       this._crudService.create(formFields, "createForm").subscribe((data:any) => {
         this.getAllForms();
       })
     }
   }
 
 
   getAllForms() {
     this._crudService.getAll("forms").subscribe((data:any) => {
       this.allForms = data.data.reverse();
       localStorage.setItem("forms", JSON.stringify(data.data));
     })
   }
 
   formDelete(formlist: any) {
     if (confirm("Do You Want Delete Forms ?") == true) {
       this._crudService.delete(formlist._id, "forms").subscribe((data:any) => {
         this.getAllForms();
       })
     }
   }

}
