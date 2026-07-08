import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
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
  courseCount = 0;

  ngOnInit(): void {

    this.courseCount = 12;

    console.log('HomeComponent initialized — courses loaded');

  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');

  }

  onEnrollClick() {

    this.message = 'Enrollment opened!';

  }

  /*
   [property] = One-way binding (Component → DOM)

   [(ngModel)] = Two-way binding (DOM ↔ Component)
  */

}