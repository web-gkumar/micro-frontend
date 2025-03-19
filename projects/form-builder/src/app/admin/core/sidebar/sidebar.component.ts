import { Component } from '@angular/core';
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
export class SidebarComponent {

  moduleLIst: any = [];
  constructor(private _crudService: CrudService) {
    this._crudService.getAllModules().subscribe((data: any) => {
      this.moduleLIst = data.data;
    });
  }


}
