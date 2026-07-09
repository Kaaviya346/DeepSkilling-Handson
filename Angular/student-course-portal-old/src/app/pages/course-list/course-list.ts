import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Course List</h2>

    <p *ngIf="isLoading">Loading courses...</p>

    <div *ngIf="!isLoading">
      <h1 style="color: green;">SUCCESS!</h1>
      <p>Loading finished.</p>
    </div>
  `
})
export class CourseList implements OnInit {

  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout executed');
      this.isLoading = false;
    }, 1500);
  }

}