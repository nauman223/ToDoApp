import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snack = inject(MatSnackBar);

  return next(req).pipe(
    catchError(err => {
      snack.open(
        err?.error?.message || 'Something went wrong',
        'Close',
        {
          duration: 3000,
          horizontalPosition: 'right',   // ✅ position toast to right
          verticalPosition: 'top',       // ✅ position toast to top
          panelClass: ['error-toast']    // optional styling
        }
      );

      return throwError(() => err);
    })
  );
};
