import { CanActivateChildFn } from '@angular/router';

export const permissionGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
