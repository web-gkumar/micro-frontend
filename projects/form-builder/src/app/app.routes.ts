import { Routes } from '@angular/router';
import { pagesRoutes } from './landing-page/pages.routes';
import { authRoutes } from './auth/auth.routes';
import { adminRoutes } from './admin/admin.routes';

export const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch:'full'},
  {path: 'page', children: pagesRoutes},
  {path: 'auth', children: authRoutes},
  {path: 'admin', children: adminRoutes}
];
