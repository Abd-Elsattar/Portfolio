import { Component, inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project-list.html',
})
export class ProjectList {
  dataService = inject(DataService);
  projects = this.dataService.projects;
}
