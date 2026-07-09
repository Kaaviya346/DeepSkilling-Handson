import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  // Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-Way Binding
  searchTerm = '';

  // Lifecycle Hook Example
  availableCourses = 12;

  // Event Binding Method
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // Lifecycle Hook - Called when the component is initialized
  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
  }

  // Lifecycle Hook - Called when the component is destroyed
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  /*
   Difference:
   [property] is one-way binding (Component → DOM).
   [(ngModel)] is two-way binding (Component ↔ DOM).
  */
}