import { inject} from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isLogined:any = inject(AuthService);
  if (isLogined.isLogined()) {
    return true;
  } else {
    isLogined.redirectUrl('/auth/signin');
    return false;
  }
};
