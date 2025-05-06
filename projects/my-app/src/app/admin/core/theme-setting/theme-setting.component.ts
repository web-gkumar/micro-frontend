import {Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {ThemeColorService} from '../../../shared/services/theme-color.service';


@Component({
  selector: 'app-theme-setting',
  imports: [MatDividerModule,MatButtonModule,MatCardModule,MatIconModule,RouterModule],
  templateUrl: './theme-setting.component.html',
  styleUrl: './theme-setting.component.scss'
})
export class ThemeSettingComponent implements OnInit{

  profileMenu = [
    { title: 'Your Profile', icon: 'account_circle', link: 'profile',},
    { title: 'Settings', icon: 'settings', link: '/settings',},
    { title: 'Log out', icon: 'logout', link: '../auth/sign-in',},
  ];

  themeColors = [
    { name: 'base', code: '#e11d48',},
    { name: 'red', code: '#cc0022', },
    { name: 'blue', code: '#3b82f6',},
    { name: 'green', code: '#22c55e',},
    { name: 'orange', code: '#ea580c',},
    { name: 'yellow', code: '#f59e0b',},
    { name: 'violet', code: '#6d28d9',},
  ];

  themeMode:any;


  constructor(private themeService: ThemeColorService){
    this.themeMode = this.themeService.theme().mode
  }


  ngOnInit(): void {

  }

  toggleThemeMode() {
    this.themeService.theme.update((theme:any) => {
      this.themeMode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: this.themeMode };
    });
  }

  toggleThemeColor(color: string) {
    this.themeService.theme.update((theme:any) => {
      return { ...theme, color: color };
    });
  }


}
