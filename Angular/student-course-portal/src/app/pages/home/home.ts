import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';
import { LoadingService } from '../../services/loading';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseSummaryWidget
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  totalCourses = 0;

  enrolledCourses = 3;

  gpa = 3.8;

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.totalCourses = courses.length;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  enrollNow(): void {

    alert('Enrollment opened!');

  }

}