import { Injectable, signal } from '@angular/core';

export interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'info' | 'success' | 'warning' | 'error';
  timestamp?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  // State
  readonly terminalLines = signal<TerminalLine[]>([]);
  readonly currentCommand = signal<string>('');
  readonly isTyping = signal<boolean>(false);

  // Configuration
  private readonly typingSpeed = 50; // ms per char
  private readonly typingVariance = 30; // Random variance

  constructor() {}

  /**
   * Adds a line directly to the terminal history
   */
  addLine(text: string, type: TerminalLine['type'] = 'output') {
    this.terminalLines.update(lines => [
      ...lines,
      { text, type, timestamp: new Date() }
    ]);
  }

  /**
   * Clears the terminal
   */
  clear() {
    this.terminalLines.set([]);
  }

  /**
   * Simulates typing a command with realistic delays and potential "mistakes" (optional future enhancement)
   */
  async typeCommand(command: string): Promise<void> {
    this.isTyping.set(true);
    this.currentCommand.set('');
    
    // Simulate thinking time
    await this.delay(300);

    for (let i = 0; i < command.length; i++) {
      this.currentCommand.update(c => c + command.charAt(i));
      
      // Random typing delay
      await this.delay(this.typingSpeed + Math.random() * this.typingVariance);
    }

    // Simulate enter key press delay
    await this.delay(200);
    
    // "Execute" command
    this.addLine(`> ${command}`, 'command');
    this.currentCommand.set('');
    this.isTyping.set(false);
  }

  /**
   * Runs a sequence of commands and outputs
   */
  async runSequence(sequence: { cmd: string; output: string | string[] }[]) {
    for (const step of sequence) {
      await this.typeCommand(step.cmd);
      
      // Processing delay
      await this.delay(400);

      if (Array.isArray(step.output)) {
        for (const line of step.output) {
           this.addLine(line, 'output');
           await this.delay(100); // Fast scroll for multi-line
        }
      } else {
        this.addLine(step.output, 'output');
      }

      await this.delay(800); // Read time
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
