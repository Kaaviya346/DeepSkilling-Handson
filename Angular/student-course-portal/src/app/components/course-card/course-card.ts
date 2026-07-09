import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: Course;

  isExpanded = false;

  constructor(
    public enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  get cardClasses() {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      default:
        return 'gray';
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleEnrollment(): void {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }

  viewCourse(): void {
    this.router.navigate(['/courses', this.course.id]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['course']);
  }
}