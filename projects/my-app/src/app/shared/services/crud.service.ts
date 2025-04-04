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

  getAll(collectionName:any):Observable<any> {
    return this.http.get(`${this.AUTH_API}/${collectionName}`);
  }
  create(data:any, collectionName:any):Observable<any> {
    return this.http.post(`${this.AUTH_API}/${collectionName}`, data);
  }
  update(id:any,data:any,collectionName:any): Observable<Object>{
    return this.http.put(`${this.AUTH_API}/${collectionName}/${id}`, data);
  }
  delete(id:any,collectionName:any):Observable<any>{
    return this.http.delete<any>(`${this.AUTH_API}/${collectionName}/${id}`);
  }
  getById(data: any,collectionName:any): Observable<any> {
    return this.http.get<any>(`${this.AUTH_API}/${collectionName}/${data}`);
  }
}
