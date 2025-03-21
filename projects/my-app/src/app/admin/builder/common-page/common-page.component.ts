import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'app-common-page',
    imports: [RouterModule, MatIconModule,MatButtonModule],
    templateUrl: './common-page.component.html',
    styleUrl: './common-page.component.scss'
})
export class CommonPageComponent implements OnInit {

  urlInfo:any;
  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    this._route.params.subscribe(res => {
      this.urlInfo = res;
    })
      
  }
  

}
