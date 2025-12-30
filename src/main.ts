import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    const el = document.getElementById('preloader');
    if (el) {
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
      setTimeout(() => el.remove(), 300);
    }
  })
  .catch((err) => {
    console.error('Bootstrap error:', err);
    const el = document.getElementById('preloader');
    if (el) {
      el.innerHTML = `
        <div style="color: #ef4444; font-family: monospace; text-align: center; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
          <h3 style="margin-bottom: 8px; font-size: 1.1rem; font-weight: bold;">Application Failed to Start</h3>
          <p style="font-size: 0.9rem; color: #374151;">${err?.message || 'Unknown error occurred'}</p>
        </div>
      `;
    }
  });

// Failsafe: Force remove preloader if it takes too long (e.g., if bootstrap hangs)
setTimeout(() => {
  const el = document.getElementById('preloader');
  if (el && document.body.contains(el)) {
    console.warn('Preloader removed by failsafe timeout');
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    setTimeout(() => el.remove(), 300);
  }
}, 4000);
