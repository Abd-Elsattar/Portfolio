import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, OnDestroy {
  dataService = inject(DataService);
  profile = this.dataService.profile;

  // Terminal Logic
  terminalLines = signal<string[]>([]);
  currentCommand = signal<string>('');
  isTyping = signal<boolean>(false);

  private commands = [
    { cmd: '> initialize_system --target=portfolio', output: 'System initialized. Loading core modules...' },
    { cmd: '> whoami', output: 'Mohamd Abd-Elsattar | Junior Full Stack Using .NET & Angular' },
    { cmd: '> stack --list', output: 'Angular, .NET Core, SQL Server' },
    { cmd: '> current_status', output: 'Ready to build scalable solutions.' }
  ];

  private intervalId: any;

  ngOnInit() {
    this.runTerminalSequence();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  async runTerminalSequence() {
    for (const line of this.commands) {
      // Type command
      this.isTyping.set(true);
      await this.typeCommand(line.cmd);
      this.isTyping.set(false);

      // Push command to history
      this.terminalLines.update(lines => [...lines, line.cmd]);
      this.currentCommand.set('');

      // Wait a bit
      await new Promise(r => setTimeout(r, 300));

      // Show output
      this.terminalLines.update(lines => [...lines, line.output, '']); // Empty string for spacing

      // Wait before next command
      await new Promise(r => setTimeout(r, 800));
    }
  }

  private typeCommand(text: string): Promise<void> {
    return new Promise(resolve => {
      let i = 0;
      this.currentCommand.set('');

      const typeChar = () => {
        if (i < text.length) {
          this.currentCommand.update(c => c + text.charAt(i));
          i++;
          setTimeout(typeChar, 50 + Math.random() * 50); // Random typing speed
        } else {
          resolve();
        }
      };

      typeChar();
    });
  }
}
