import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
            Validators.email
          ],
          asyncValidators: [
            this.simulateEmailCheck()
          ]
        }
      ),

      courseId: [
        '',
        [
          Validators.required,
          this.noCourseCode()
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array<FormControl>([])

    });

  }

  noCourseCode(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const value = control.value;

      if (value && value.toString().startsWith('XX')) {

        return { noCourseCode: true };

      }

      return null;

    };

  }

  simulateEmailCheck(): AsyncValidatorFn {

    return (control: AbstractControl) => {

      return new Promise<ValidationErrors | null>((resolve) => {

        setTimeout(() => {

          if (control.value && control.value.includes('test@')) {

            resolve({ emailTaken: true });

          } else {

            resolve(null);

          }

        }, 800);

      });

    };

  }

  get additionalCourses(): FormArray<FormControl> {

    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;

  }

  addCourse(): void {

    this.additionalCourses.push(
      new FormControl('', Validators.required)
    );

  }

  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }

  onSubmit(): void {

    console.log('Form Value');
    console.log(this.enrollForm.value);

    console.log('Raw Value');
    console.log(this.enrollForm.getRawValue());

  }

}