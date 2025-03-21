import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);
  let authToken: string | null = null;
  
  if (isPlatformBrowser(platformId)) {
    authToken = localStorage.getItem('token');
  }

  if (authToken) {
    return true;
  } else {
    router.navigate(['/auth/sign-in']);
    return false;
  }
};
