import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard,
    Highlight
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular Basics',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java Programming',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Database Systems',
      code: 'DB301',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy improves performance by reusing existing DOM elements.
  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}