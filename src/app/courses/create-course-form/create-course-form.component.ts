import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-create-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, SharedComponentsModule],
  templateUrl: './create-course-form.component.html',
  styleUrl: './create-course-form.component.scss',
})
export class CreateCourseFormComponent {
  protected form: FormGroup = this.formBuilder.group({
    name: [null],
    category: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private location: Location,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  protected onSubmit(): void {
    this.coursesService.save(this.form.value).subscribe({
      error: (e) => {
        this.dialog.open(ErrorDialogComponent, {
          data: 'Ocorreu um erro de servidor inesperado!',
        });
      },
      complete: () => {
        this._snackBar.open('Curso salvo com sucesso!', 'Confirmar', {
          duration: 5000,
        });
        this.location.back();
      },
    });
  }

  protected onCancel(): void {
    this.location.back();
  }
}
