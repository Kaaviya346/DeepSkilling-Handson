import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-Way Binding
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  /*
   Difference:
   [property] is one-way binding (Component → DOM).
   [(ngModel)] is two-way binding (Component ↔ DOM).
  */
}