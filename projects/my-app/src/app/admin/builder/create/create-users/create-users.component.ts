import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CrudService } from '../../../../shared/services/crud.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-users',
  imports: [CommonModule,MatIconModule, MatFormFieldModule, MatButtonModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-users.component.html',
  styleUrl: './create-users.component.scss'
})
export class CreateUsersComponent implements OnInit {
  userForms!:FormGroup;
  moduleList:any;

  constructor( private fb: FormBuilder, private _crudServices: CrudService){
    let forms:any = localStorage.getItem("modules");
    this.moduleList = JSON.parse(forms);
  }
  ngOnInit(): void {
    this.userForms = this.fb.group({
      "username": ['', [Validators.required]],
      "email": ['', [Validators.required]],
      "password": ['', [Validators.required]],
      "role": ['', [Validators.required]],
      "assigmenu": [""],
      "collectionName": ["userlist"]
    })
    this.getUser();
  }

  submitform(){
    this._crudServices.create(this.userForms.value, "createUser").subscribe((data:any) => {
      if(data){
        this.userForms.reset()
      }
    })
  }

  getUser(){
    this._crudServices.getAllCollection("getUser", {collectionName: "userlist"}).subscribe((data:any) =>{

    })
  }

}
