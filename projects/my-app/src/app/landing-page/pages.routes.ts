import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const pagesRoutes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path:'', component:LayoutComponent, children:[
        {path:'home', loadComponent:() => import('./home/home.component').then(c => c.HomeComponent)},
        {path:'about-us', loadComponent:() => import('./about-us/about-us.component').then(c => c.AboutUsComponent)},
        {path:'services', loadComponent:() => import('./services/services.component').then(c => c.ServicesComponent)},
        {path:'contact-us', loadComponent:() => import('./contact-us/contact-us.component').then(c => c.ContactUsComponent)},
    ]}
    

]