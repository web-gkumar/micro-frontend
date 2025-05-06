import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-notification',
  imports: [MatButtonModule,MatDividerModule,MatCardModule,MatIconModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {

  
  notifymsg = [
    { icon: 'https://material.angular.io/assets/img/examples/shiba1.jpg', time: '5min ago',discription: 'Hey [Recipient\'s Name]! Just wanted to check.'},
    { icon: 'https://material.angular.io/assets/img/examples/shiba1.jpg', time: '5min ago',discription: 'Hey [Recipient\'s Name]! Just wanted to check.'},
    { icon: 'https://material.angular.io/assets/img/examples/shiba1.jpg', time: '5min ago',discription: 'Hey [Recipient\'s Name]! Just wanted to check.'},
    { icon: 'https://material.angular.io/assets/img/examples/shiba1.jpg', time: '5min ago',discription: 'Hey [Recipient\'s Name]! Just wanted to check.'},
    { icon: 'https://material.angular.io/assets/img/examples/shiba1.jpg', time: '5min ago',discription: 'Hey [Recipient\'s Name]! Just wanted to check.'},
    { icon: 'https://material.angular.io/assets/img/examples/shiba1.jpg', time: '5min ago',discription: 'Hey [Recipient\'s Name]! Just wanted to check.'},
    { icon: 'https://material.angular.io/assets/img/examples/shiba1.jpg', time: '5min ago',discription: 'Hey [Recipient\'s Name]! Just wanted to check.'},
    { icon: 'https://material.angular.io/assets/img/examples/shiba1.jpg', time: '5min ago',discription: 'Hey [Recipient\'s Name]! Just wanted to check.'},
  ];

  constructor(){
  }


  ngOnInit(): void {
    
  }

}
