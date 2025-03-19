import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction, Subject } from 'rxjs';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  AUTH_API:any = 'http://localhost:2100';
  constructor(private http: HttpClient) { }

  getAllModules():Observable<any> {
    return this.http.get(`${this.AUTH_API}/modules`);
  }
  getCurrentModules(data:any):Observable<any> {
    return this.http.get(`${this.AUTH_API}/modules/${data}`);
  }
  createModules(data:any):Observable<any> {
    return this.http.post(`${this.AUTH_API}/createModule`, data);
  }
  updateModule(id:any,data:any): Observable<Object>{
    return this.http.put(`${this.AUTH_API}/modules/${id}`, data);
  }
  deleteModules(id:any):Observable<any>{
    return this.http.delete<any>(`${this.AUTH_API}/modules/${id}`);
  }


  getAllForms():Observable<any> {
    return this.http.get(`${this.AUTH_API}/forms`);
  }
  createForms(data:any):Observable<any> {
    return this.http.post(`${this.AUTH_API}/createForm`, data);
  }
  getFormById(data: any): Observable<any> {
    return this.http.get<any>(`${this.AUTH_API}/forms/${data}`);
  }
  updateForms(id:any, data:any): Observable<Object>{
    return this.http.put(`${this.AUTH_API}/forms/${id}`, data);
  }
  deleteForms(id:any):Observable<any>{
    return this.http.delete<any>(`${this.AUTH_API}/forms/${id}`);
  }



  createFormsData(data:any): Observable<any> {
    return this.http.post(`${this.AUTH_API}/createFormData`, data)
  }
  getGridData(data:any): Observable<any>{
    return this.http.post<any>(`${this.AUTH_API}/gridData`, data);
  }
  updateGridData(id:any, data:any): Observable<Object>{
    return this.http.put(`${this.AUTH_API}/gridData/${id}`, data);
  }

  deleteGridItem(id:any, data:any): Observable<any> {
    const options = {body: data};
    return this.http.delete(`${this.AUTH_API}/gridData/${id}`, options);
  }

}
