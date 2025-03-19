import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const authRoutes: Routes = [
  {path: '', redirectTo:'signin', pathMatch:'full'},
  {path: '', component:AuthComponent, children: [
    {path:'signin', loadComponent: () => import('./sign-in/sign-in.component').then( c => c.SignInComponent)},
    {path:'signup', loadComponent: () => import('./sign-up/sign-up.component').then( c => c.SignUpComponent)}
  ]}
];