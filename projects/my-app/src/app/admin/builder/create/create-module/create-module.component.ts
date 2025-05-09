import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FilterPipe } from "../../../../shared/pipes/filter.pipe";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CrudService } from '../../../../shared/services/crud.service';


@Component({
  selector: 'app-create-module',
  imports: [MatIconModule, FormsModule, CommonModule, MatButtonModule, MatButtonToggleModule, MatAutocompleteModule, CdkAccordionModule, FilterPipe],
  templateUrl: './create-module.component.html',
  styleUrl: './create-module.component.scss'
})
export class CreateModuleComponent {
  filterSearch:any
  moduleList:any = [];
  moduleinTabs?: string;
  formLIst:any[]= [];


  constructor( private _crudService:CrudService){
    let forms:any = localStorage.getItem("forms");
    this.formLIst = JSON.parse(forms);
  }

  ngOnInit(): void {
    this.getModule();
  }

  getModule(){
    let forms:any = localStorage.getItem("modules");
    this.moduleList = JSON.parse(forms);
  }
  
  createModule() {
    let moduleList:any = {
      "moduleName": "Module",
      "moduleIcon": "home",
      "moduleForm": "",
      "menulist": []
  }
  this._crudService.create(moduleList, "createModule").subscribe((data:any) => {
    this.getModule();
  })
}
createMenu(data:any){
  let menuitems = {
    "menuName": "menu",
    "menuIcon": "home",
    "menuFormName" : "",
    "tablist" : []
  }
  data['menulist'].push(menuitems);
}




saveModule(data:any) {
  this._crudService.update(data._id, data, "modules").subscribe((data:any) => {
    this.getModule();
  });
}


removeModule(data:any){
  if(confirm("Do want to delete ?") == true) {
      this._crudService.delete(data._id,"modules").subscribe((data:any) => {
        this.getModule();
      });
  }
}

}
