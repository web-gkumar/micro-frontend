import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, Location } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table-grid',
  imports: [RouterModule, CommonModule, MatButtonModule, MatIconModule, FilterPipe, FormsModule, MatCheckboxModule, MatMenuModule],
  templateUrl: './table-grid.component.html',
  styleUrl: './table-grid.component.scss'
})
export class TableGridComponent {

  @Input() formData: any;
    gridFields: any;
    gridData: any;
    filter: any;


  constructor( private _crudService: CrudService, private _router: Router, private _route: ActivatedRoute,) { }

  ngOnChanges() {
    this.setGridtitle();
    this.getGridData();
  }


  setGridtitle() {
    this.gridFields = this.formData['formControls'];
  }

  getGridData() {
    this._crudService.getAllCollection('griddata',  {"collectionName": this.formData['formName']}).subscribe(res => {
        this.gridData = res.data;
        localStorage.setItem("gridData", JSON.stringify(res.data));
    })
  }



   actionBtn(formValue: any, btnname: any) {
    switch (btnname) {
      case "Update":
        this._router.navigate(['grid', formValue._id], { relativeTo: this._route })
        break;
      case "Delete":
        if (confirm("Do You Want to Delete ?")) {
          const bodyData = { collectionName: this.formData['formName'] };
          this._crudService.deleteitem(formValue._id, 'gridData', bodyData).subscribe((data: any) => {
            if (data) {
            this.formData = data.data;
            }
    })
        }
        break;
      case "Clone":
        if (confirm("Do You Want to Clone this Data ?")) {
          delete formValue['_id']
          this._crudService.create(formValue,'savedFormData').subscribe((data:any) => {
            this.getGridData();
          })
        }
        break;
                
      default:
        break;
    }

  }



   downloadFile(): void {
    const data:any = document.getElementById('tableData');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${this.formData.formName}.xlsx`);
  }

  saveGridFields(formData:any){
    formData['collectionName'] = "app_forms";
     this._crudService.update(formData._id, formData, "forms").subscribe((data: any) => {
      if (data) {
       this.formData = data.data;
      }
    })
  }



}
