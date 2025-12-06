import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloadStrategy implements PreloadingStrategy {
  preload<T>(route: Route, fn: () => Observable<T>): Observable<T | null> {
    return route.data?.['preload'] ? fn() : of(null);
  }
}
