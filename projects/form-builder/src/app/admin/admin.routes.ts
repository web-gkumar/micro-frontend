import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

export const adminRoutes: Routes = [
    {path: '', redirectTo:'dashboard', pathMatch:'full'},
      {path: '', component:AdminComponent, children: [
        {path:'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then( c => c.DashboardComponent)},
      ]}
    
]