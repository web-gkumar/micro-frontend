import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CrudService } from '../../../shared/services/crud.service';
import { TableGridComponent } from '../table-grid/table-grid.component';


@Component({
    selector: 'app-common-page',
    imports: [RouterModule, MatIconModule,MatButtonModule, TableGridComponent],
    templateUrl: './common-page.component.html',
    styleUrl: './common-page.component.scss'
})
export class CommonPageComponent implements OnInit {

  urlInfo:any;
  formData: any = {};


  constructor(private _route: ActivatedRoute, private _crudService: CrudService){

  }

  ngOnInit(): void {
    this._route.params.subscribe(res => {
      this.urlInfo = res;
    })
    
    this._crudService.getAllCollection("griddata",  {'collectionName': this.urlInfo?.formName}).subscribe((res:any) => {
      this.formData = res.data;
    })


  }
  


}
