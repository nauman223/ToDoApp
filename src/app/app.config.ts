import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { TODO_EFFECTS } from './todos/state/todo.effects';
import { todoReducer } from './todos/state/todo.reducer';
import { CustomPreloadStrategy } from './app.preload';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // provideAnimations(),

    provideRouter(routes, withPreloading(CustomPreloadStrategy)),

    // 🔥 YOU NEED THIS — Without it, HttpClient DOES NOT exist
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),

    provideStore({ todos: todoReducer }),
    provideEffects(TODO_EFFECTS),
  ],
};
