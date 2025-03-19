import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudService } from '../../../../shared/services/crud.service';


@Component({
    selector: 'app-dynamic-menu',
    imports: [MatIconModule, CdkAccordionModule, MatButtonToggleModule, MatAutocompleteModule, CommonModule, FormsModule],
    templateUrl: './dynamic-menu.component.html',
    styleUrl: './dynamic-menu.component.scss'
})
export class DynamicMenuComponent implements OnInit {

  moduleList: any = [];
  moduleinTabs?: string;
  formLIst: any[] = [];


  constructor(
    private _crudService: CrudService
  ) {
    this._crudService.getAllForms().subscribe((data: any) => {
      this.formLIst = data.data;
    })
  }

  ngOnInit(): void {
    this.getModule()
  }


  getModule() {
    this._crudService.getAllModules().subscribe((data: any) => {
      this.moduleList = data.data;
    })
  }

  createModule() {
    let moduleList: any = { "moduleName": "Module", "moduleIcon": "home", "moduleForm": "", "menulist": [] }
    this._crudService.createModules(moduleList).subscribe((data: any) => {
      this.getModule();
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
