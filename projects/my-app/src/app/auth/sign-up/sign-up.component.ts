import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouterModule,Router} from '@angular/router'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from '../../shared/services/auth.service';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
    selector: 'app-sign-up',
    imports: [RouterModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{
  registationForm!: FormGroup<any>;
  horizontalPosition:any = 'Right';
  verticalPosition:any = 'Top';

  
  constructor(
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _route:Router,
    private _http:HttpClient,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registationForm = this._fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
      let formValue = this.registationForm.value;
      this._authService.register(formValue).subscribe(data => {
        if(data.message) {
          this._authService.notifications(`Sign Up ${data.message}`);
          this._route.navigateByUrl("auth/signin")
        }
      })
      this.registationForm.reset("");
  }

}
