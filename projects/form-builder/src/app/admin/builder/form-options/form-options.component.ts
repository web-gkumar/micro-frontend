import {Component,Inject,OnInit} from '@angular/core';
import {FormsControalService} from '../../../../shared/services/forms-controal.service';
import {MAT_DIALOG_DATA,MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import {CrudService} from '../../../../shared/services/crud.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-form-options',
    imports: [MatButtonModule, MatIconModule, MatDialogModule, MatTabsModule, RouterModule, FormsModule, MatDatepickerModule, MatFormFieldModule, MatCheckboxModule, MatDividerModule, ReactiveFormsModule],
    templateUrl: './form-options.component.html',
    styleUrl: './form-options.component.scss'
})
export class FormOptionsComponent implements OnInit {

  pagetitle = "Create Form Fields";

  constructor(
    public dialogRef: MatDialogRef<FormOptionsComponent>,
    private _formsControalService: FormsControalService,
    private _crudService: CrudService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {

  }

  ngOnInit(): void {}

  closeModel() {
    this.dialogRef.close();
  }

  saveForm(){
    this.dialogRef.close(this.data);
  }
  updateFormlist() {
    this._crudService.updateForms(this.data[0]._id, this.data[0]).subscribe((data:any) => {
      this.dialogRef.close();
    })
  }

  addvalue(data:any) {
    let valueList = {
      "isChecked": false,
    };
    data.push(valueList);
  }
  createActionBtn(data:any){
    let btnList = {
      "btnname": "Update",
      "btnicon": "edit",
      "useto": "grid",
      "isdisabled": false
    }
    data.push(btnList);
  }

}
