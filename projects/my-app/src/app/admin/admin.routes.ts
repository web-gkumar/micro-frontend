import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

export const adminRoutes: Routes = [
    {path: '', redirectTo:'dashboard', pathMatch:'full'},
      {path: '', component:AdminComponent, children: [
        {path:'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then( c => c.DashboardComponent)},
        {path:'create', loadComponent: () => import('./builder/create/create.component').then( c => c.CreateComponent)},
        {path:'update/:id', loadComponent: () => import('./builder/form-fields/form-fields.component').then( c => c.FormFieldsComponent)},
        {path:':moduleName/:formName', loadComponent: () => import('./builder/common-page/common-page.component').then( c => c.CommonPageComponent)},
        {path:':moduleName/:formName/:addNew', loadComponent: () => import('./builder/form-fields/form-fields.component').then( c => c.FormFieldsComponent)},
        {path:':menuName/:menuFormName', loadComponent: () => import('./builder/common-page/common-page.component').then( c => c.CommonPageComponent)},
        
      ]}
    
]