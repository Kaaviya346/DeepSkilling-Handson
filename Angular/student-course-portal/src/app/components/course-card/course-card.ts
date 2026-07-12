import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { Course } from '../../models/course.model';

import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

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

  enrolledIds$!: Observable<number[]>;

  isExpanded = false;

  constructor(
    private store: Store,
    private router: Router
  ) {

    this.enrolledIds$ =
      this.store.select(selectEnrolledIds);

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

  enroll(): void {

    this.store.dispatch(

      EnrollmentActions.enrollInCourse({

        courseId: this.course.id

      })

    );

  }

  unenroll(): void {

    this.store.dispatch(

      EnrollmentActions.unenrollFromCourse({

        courseId: this.course.id

      })

    );

  }

  viewCourse(): void {

    this.router.navigate([
      '/courses',
      this.course.id
    ]);

  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(
      'Course changed:',
      changes['course']
    );

  }

}