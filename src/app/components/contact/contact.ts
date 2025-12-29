import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  dataService = inject(DataService);
  profile = this.dataService.profile;

  name = signal('');
  email = signal('');
  message = signal('');

  isSubmitting = signal(false);

  async sendMessage() {
    if (!this.name() || !this.email() || !this.message()) return;

    this.isSubmitting.set(true);

    // Simulate terminal processing delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const subject = `Portfolio Contact: ${this.name()}`;
    const body = `Name: ${this.name()}
Email: ${this.email()}

Message:
${this.message()}`;

    const mailtoLink = `mailto:${this.profile().email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    this.isSubmitting.set(false);

    // Reset form
    this.name.set('');
    this.email.set('');
    this.message.set('');
  }
}
