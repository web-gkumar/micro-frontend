import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-table-grid',
  imports: [RouterModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './table-grid.component.html',
  styleUrl: './table-grid.component.scss'
})
export class TableGridComponent {

  @Input() formData: any;
    gridFields: any;
    gridData: any;


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
          // this._crudService.deleteGridItem(formValue?._id, formValue).subscribe((data: any) => {
          //   this.getGridData();
          // })
        }
        break;
      // case "Clone":
      //   if (confirm("Do You Want to Clone this Data ?")) {
      //     delete formValue['_id']
      //     this._crudService.createFormsData(formValue).subscribe((data:any) => {
      //       this.getGridData();
      //     })
      //   }
      //   break;
      //   case "SaveExportData":
      //     if (confirm("Do You Want to Import this Data ?")) {
      //       this._crudService.createFormsData(formValue).subscribe((data: any) => {
      //         if (data) {
      //           alert("Saved Data");
      //         }
      //       })
      //     }
      //     break;
        
      default:
        break;
    }

  }



}
