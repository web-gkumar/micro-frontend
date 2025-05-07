import { Component, Input, OnInit } from '@angular/core';
// import { CdkMenu,CdkMenuItem,CdkContextMenuTrigger} from '@angular/cdk/menu';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CrudService } from '../../../shared/services/crud.service';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDialog } from '@angular/material/dialog';
import { CommonModule, Location } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { map, of } from 'rxjs';

@Component({
  selector: 'app-table-grid',
  imports: [CommonModule],
  templateUrl: './table-grid.component.html',
  styleUrl: './table-grid.component.scss'
})
export class TableGridComponent {

  @Input() formData: any;
  // gridFields: any;
  // gridData: any;
  // filter: any;
  // currentGridData:any;

  constructor(
    private _crudService: CrudService
  ) { }

  ngOnChanges() {
    console.log(this.formData)
    this.getGridData();
  }



  getGridData() {
    let pojoName = this.formData['pojo'];
    if (pojoName) {
      this._crudService.getAll(this.formData, "").subscribe(res => {
        // this.gridFields = this.formData['formControls'];
        // this.gridData = res.data;
      })
    }
  }

  // setGridColumn(gridData: any, formData: any) {
  //   let formControl = formData['formControls'];
  //   of(formControl).pipe(
  //     map((res: any) => res.filter((res: any) => res.hideOnGrid == true))
  //   ).subscribe((data: any) => {
  //     this.gridFields = formData['formControls'];
  //     this.gridData = gridData;
  //   })

  // }



  // saveGridFields() {
  //   this._crudService.update(this.formData._id, this.formData,'').subscribe((data: any) => {
  //     if (data) {
  //       // this.setGridColumn(this.gridData, data['data']);
  //     }
  //   })
  // }


  // actionBtn(formValue: any, btnname: any) {
  //   switch (btnname) {
  //     case "Update":
  //       if (this.formData?.isPopup) {
  //         this._router.navigate([formValue._id, 'update-inpopup'], { relativeTo: this._route });
  //         this._dialog.open(FormFieldsComponent, {
  //           disableClose: true,
  //           width:'1200px',
  //           maxWidth:'100vw',
  //           height:'500px',
  //           panelClass: 'gridpopupform',
  //         }).afterClosed().subscribe(response => {
  //             this._location.back();
  //             console.log(`Dialog result: ${response}`);
  //           });
  //       }else {
  //         this._router.navigate([formValue._id], { relativeTo: this._route })
  //       }
  //       break;
  //     case "Delete":
  //       if (confirm("Do You Want to Delete ?")) {
  //         this._crudService.delete(formValue?._id, formValue).subscribe((data: any) => {
  //           this.getGridData();
  //         })
  //       }
  //       break;
  //     case "Clone":
  //       if (confirm("Do You Want to Clone this Data ?")) {
  //         delete formValue['_id']
  //         this._crudService.create(formValue,"").subscribe((data:any) => {
  //           this.getGridData();
  //         })
  //       }
  //       break;
  //       case "SaveExportData":
  //         if (confirm("Do You Want to Import this Data ?")) {
  //           this._crudService.create(formValue,"").subscribe((data: any) => {
  //             if (data) {
  //               alert("Saved Data");
  //             }
  //           })
  //         }
  //         break;
        
  //     default:
  //       break;
  //   }

  // }
  // gridDetislpage(gridValue:any) {
  //   this._router.navigate(['../../../grid/details/', this.formData.formName, gridValue._id,], { relativeTo: this._route });
  // }


  
  // downloadFile(): void {
  //   const data:any = document.getElementById('tableData');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //   XLSX.writeFile(wb, `${this.formData.formName}.xlsx`);
  // }

  // onContextMenuAction1(currentGridData: any) {
  //   this.currentGridData = currentGridData;
  // }

  // data: any[][] = [];

  // onFileChange(event: any) {
  //   /* wire up file reader */
  //   const target: DataTransfer = <DataTransfer>(event.target);
  //   if (target.files.length !== 1) {
  //     throw new Error('Cannot use multiple files');
  //   }
  //   const reader: FileReader = new FileReader();
  //   reader.readAsBinaryString(target.files[0]);
  //   reader.onload = (e: any) => {
  //     /* create workbook */
  //     const binarystr: string = e.target.result;
  //     const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

  //     /* selected the first sheet */
  //     const wsname: string = wb.SheetNames[0];
  //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];

  //     /* save data */
  //     const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
  //     this.gridData.push(...data);
  //     console.log(this.gridData); // Data will be logged in array format containing objects
  //   };
   
  // }

  // saveGridData() {
  //   this.gridData.push(this.gridData);
  // }

  // createDynamicTable() {
  //   // Dynamic table logic can be implemented here.
  //   // For example, binding this.data to your table in HTML.
  // }

}
