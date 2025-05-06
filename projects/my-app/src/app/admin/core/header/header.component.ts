import {Component, OnInit} from '@angular/core';
import {ThemeSettingComponent} from '../theme-setting/theme-setting.component';
import {NotificationComponent} from '../notification/notification.component';
import {FormControl,FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {startWith, map} from 'rxjs/operators';
import {RouterModule} from '@angular/router';
import {Observable} from 'rxjs';




@Component({
    selector: 'app-header',
    imports: [NotificationComponent,ThemeSettingComponent, MatMenuModule, MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatCardModule, MatDividerModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {


  control = new FormControl('');
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets!: Observable<string[]>;
  
  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
