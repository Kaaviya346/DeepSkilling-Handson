import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';

import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';

import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    Highlight
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];

  searchTerm = '';

  errorMessage = '';

  // Subject used for switchMap
  selectedCourse = new Subject<number>();

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

    // Load courses
    this.courseService.getCourses().subscribe({

      next: (courses) => {

        console.log('Courses received:', courses);

        this.courses = courses;

        this.isLoading = false;

      },

      error: (err) => {

        console.error('HTTP Error:', err);

        this.errorMessage = err.message;

        this.isLoading = false;

      },

      complete: () => {

        console.log('Courses loaded successfully.');

      }

    });

    // switchMap example
    this.selectedCourse.pipe(

      switchMap(courseId =>
        this.enrollmentService.getStudentsByCourse(courseId)
      )

    ).subscribe({

      next: (students) => {

        console.log('Enrollments:', students);

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  loadStudents(courseId: number): void {

    this.selectedCourse.next(courseId);

  }

  searchCourse(): void {

    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}