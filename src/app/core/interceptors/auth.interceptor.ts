import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  // If token exists but is expired → logout immediately
  if (token && auth.isTokenExpired()) {
    auth.logout(); // redirects to /login automatically
    return next(req); // stop modifying request
  }

  // Attach token if valid
  const modifiedReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    : req;

  return next(modifiedReq);
};
