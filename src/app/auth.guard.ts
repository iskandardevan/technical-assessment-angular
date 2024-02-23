import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if ( inject (AuthService).session ) return true;
  inject(Router).navigate(['/']);
  return false;
};
