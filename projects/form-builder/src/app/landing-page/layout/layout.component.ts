import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { HeaderComponent } from '../include/header/header.component';
import { FooterComponent } from '../include/footer/footer.component';


@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
