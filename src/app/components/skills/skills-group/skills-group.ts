import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-skills-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-group.html',
  styleUrl: './skills-group.css'
})
export class SkillsGroup {
  dataService = inject(DataService);
  skillGroups = this.dataService.skills;

  onMouseMove(e: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }
}
