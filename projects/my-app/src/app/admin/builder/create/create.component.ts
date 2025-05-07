import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipe } from '../../../shared/pipes/filter.pipe'
import { CreateFormsComponent } from './create-forms/create-forms.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { CreateModuleComponent } from './create-module/create-module.component'

@Component({
  selector: 'app-create',
  imports: [CommonModule, MatTabsModule, MatIconModule, CreateFormsComponent, CreateUsersComponent, CreateModuleComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor() { }
}
