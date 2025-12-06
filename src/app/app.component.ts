import { Component, inject, signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterOutlet } from '@angular/router';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private router = inject(Router);

  // Angular Signals instead of class property
  loading = signal(false);

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event) => event instanceof RouteConfigLoadStart || event instanceof RouteConfigLoadEnd,
        ),
        debounceTime(50),
      )
      .subscribe((event) => {
        this.loading.set(event instanceof RouteConfigLoadStart);
      });
  }
}
