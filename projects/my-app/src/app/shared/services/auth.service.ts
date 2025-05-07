import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from '../interface/users';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseUrl = environment.serverhost;
  private currentUser : Users | null = null;

  private userlist: Users[] = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
    { id: 2, username: 'editor1', password: 'editor123', role: 'editor' },
    { id: 3, username: 'viewer1', password: 'viewer123', role: 'viewer' }
  ];

  constructor(private http: HttpClient,private _snackBar: MatSnackBar,private _route:Router) {}
  

  login(signInData:any) {
    return this.http.post(`${this.baseUrl}/signin`, signInData, httpOptions);
  }

  register(authData:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, authData, httpOptions);
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isLogined(){
    return !!localStorage.getItem("token")
  }
  redirectUrl(url:any){
    this._route.navigateByUrl(url, {replaceUrl: false})
  }


notifications(message:any){
  this._snackBar.open(message, '', {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  });
}

}
