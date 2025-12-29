import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  host: {
    'class': 'flex flex-col lg:flex-row gap-12 items-start group w-full',
    '[class.lg:flex-row-reverse]': 'reversed'
  }
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
  @Input() reversed = false;
}
