import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  constructor() { }

  private currentModule = new BehaviorSubject<any>(null);
  private menuIndex = new BehaviorSubject<any>(null);


  setCurrentModule(data:any) {
    this.currentModule.next(data);
  }
  getCurrentModule() {
    return this.currentModule.asObservable(); 
  }

 
}
