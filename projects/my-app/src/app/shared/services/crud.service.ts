import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  AUTH_API:any = environment.serverhost;
  constructor(private http: HttpClient) { }

  getAll(path:any,data:any):Observable<any> {
    return this.http.get(`${this.AUTH_API}/${path}`, data);
  }
  getAllCollection(path:any,data:any):Observable<any> {
    return this.http.post(`${this.AUTH_API}/${path}`, data);
  }
  create(data:any, path:any):Observable<any> {
    return this.http.post(`${this.AUTH_API}/${path}`, data);
  }
  update(id:any,data:any,path:any): Observable<Object>{
    return this.http.put(`${this.AUTH_API}/${path}/${id}`, data);
  }
  delete(id:any,path:any):Observable<any>{
    return this.http.delete<any>(`${this.AUTH_API}/${path}/${id}`);
  }
  getById(data: any,path:any): Observable<any> {
    return this.http.get<any>(`${this.AUTH_API}/${path}/${data}`);
  }
}
