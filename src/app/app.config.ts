import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Enabling event coalescing for better performance with Zone.js
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),
    provideAnimations()
  ]
};
