import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(true);

  constructor() {
    this.initTheme();
    effect(() => {
      const isDark = this.isDarkMode();
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  private initTheme() {
    // Check if running in browser environment
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
      } else {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this.isDarkMode.set(mediaQuery.matches);
        
        // Listen for system changes
        mediaQuery.addEventListener('change', (e) => {
          if (!localStorage.getItem('theme')) {
            this.isDarkMode.set(e.matches);
          }
        });
      }
    }
  }

  toggleTheme() {
    this.isDarkMode.update(prev => !prev);
  }
}
