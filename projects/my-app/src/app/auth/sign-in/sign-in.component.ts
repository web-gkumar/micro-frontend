import {Component, OnInit} from '@angular/core';
import {RouterModule,Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../../shared/services/auth.service';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';


@Component({
    selector: 'app-sign-in',
    imports: [RouterModule, ReactiveFormsModule],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;

  constructor( private fb: FormBuilder,private _route:Router,
    private _snackBar: MatSnackBar,private _authService:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  onSubmit() {
    let formValue = this.loginForm.value;
    this._authService.login(formValue).subscribe((data:any) => {
      if(data){
        localStorage.setItem('token', data?.jwtoken)
        this._authService.notifications(`Login Successfull`)
        this._route.navigate(['/admin']);
      }
    })
    this.loginForm.reset();
  }

  }


