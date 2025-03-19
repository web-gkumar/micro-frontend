import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const routerurl = inject(Router);
  const authToken = localStorage.getItem('token');
  if(authToken) {
    return true;
  }else {
    routerurl.navigate(['/auth/sign-in']);
    return false;
  }
};
