import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:2100';
  private isAuthenticated = false;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private _route:Router
  ) {}
  

  login(signInData:any) {
    return this.http.post(`${this.baseUrl}/signin`, signInData, httpOptions);
  }

  register(authData:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, authData, httpOptions);
  }

  logout(): void {
    localStorage.removeItem("token");
    this.isAuthenticated = false;
  }




}
