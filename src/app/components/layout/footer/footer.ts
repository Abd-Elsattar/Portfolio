import { Component, inject } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  dataService = inject(DataService);
  profile = this.dataService.profile;
  year = new Date().getFullYear();
}
