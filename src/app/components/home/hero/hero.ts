import { Component, inject, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, effect } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { TerminalService } from '../../../services/terminal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero implements OnInit {
  dataService = inject(DataService);
  terminalService = inject(TerminalService);

  profile = this.dataService.profile;

  // Expose signals for template
  terminalLines = this.terminalService.terminalLines;
  currentCommand = this.terminalService.currentCommand;
  isTyping = this.terminalService.isTyping;

  @ViewChild('terminalContainer') terminalContainer!: ElementRef<HTMLDivElement>;

  constructor() {
    // Auto-scroll effect
    effect(() => {
      // Track the signal
      this.terminalLines();
      this.currentCommand();

      // Scroll after render
      setTimeout(() => this.scrollToBottom(), 10);
    });
  }

  private sequence = [
    {
      cmd: 'initialize_system --env=production',
      output: [
        'Loading Core Modules...',
        '✔ Angular 19 [Loaded]',
        '✔ .NET 9 [Loaded]',
        '✔ SQL Server [Connected]',
        'System initialized successfully.'
      ]
    },
    {
      cmd: 'whoami',
      output: 'Mohamd Abd-Elsattar | Full Stack Engineer'
    },
    {
      cmd: 'cat skills.json | grep "Expertise"',
      output: [
        '{',
        '  "Frontend": ["Angular", "TypeScript", "Tailwind"],',
        '  "Backend": ["ASP.NET Core", "Clean Architecture"],',
        '  "Database": ["EF Core", "SQL Server"]',
        '}'
      ]
    },
    {
      cmd: 'run_tests --all',
      output: [
        'Running unit tests...',
        'PASS: Component Architecture',
        'PASS: API Integration',
        'PASS: Performance Optimization',
        'ALL TESTS PASSED. Ready to deploy.'
      ]
    }
  ];

  ngOnInit() {
    this.startTerminal();
  }

  async startTerminal() {
    await this.terminalService.runSequence(this.sequence);
  }

  private scrollToBottom() {
    if (this.terminalContainer?.nativeElement) {
      const el = this.terminalContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
}
