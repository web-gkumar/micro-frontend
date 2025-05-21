import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-sidebar',
    imports: [MatButtonModule, MatTooltipModule, MatMenuModule, MatIconModule, RouterModule, CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  moduleLIst: any = [];
  constructor(private _crudService: CrudService) {
    this._crudService.getAllCollection("modules", {collectionName: "app_modules"}).subscribe((data: any) => {
      this.moduleLIst = data.data;
      localStorage.setItem("modules", JSON.stringify(data.data));
    });
  }

  ngOnInit(): void {
    this.getAllForms() 
  }
   getAllForms() {
     this._crudService.getAllCollection("forms", {"collectionName": "app_forms"}).subscribe((data:any) => {
       localStorage.setItem("forms", JSON.stringify(data.data));
     })
   }


}
