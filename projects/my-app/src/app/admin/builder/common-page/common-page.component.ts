import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TableGridComponent } from '../table-grid/table-grid.component';
import { map, of } from 'rxjs';


@Component({
    selector: 'app-common-page',
    imports: [RouterModule, MatIconModule,MatButtonModule, TableGridComponent],
    templateUrl: './common-page.component.html',
    styleUrl: './common-page.component.scss'
})
export class CommonPageComponent implements OnInit {

  urlInfo:any;
  formData: any = {};


  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    this.getCurrentForm();
  }


  getCurrentForm(){
     this._route.params.subscribe((url: any) => {
      if (url['moduleName'] && url['formName'] && url['formName'] != '') {
        let currentForm = localStorage.getItem("forms");
        let parsedData = currentForm ? JSON.parse(currentForm) : null;
        of(parsedData).pipe(
          map((res:any) => res.filter((data: any) => data.formName === url['formName'])))
            .subscribe((res) => {
              this.formData = res[0];
            })
          }
      })
  }
  

}
