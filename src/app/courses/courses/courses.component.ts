import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { AppMaterialModule } from '../../shared/app-material.module';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, SharedComponentsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  protected courses$: Observable<Course[]> = this.getCourses();
  protected displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  protected getCourses(): Observable<Course[] | never[]> {
    return this.coursesService.list().pipe(
      catchError(() => {
        this.onError(`Falha ao carregar cursos.`);
        return of([]);
      })
    );
  }

  protected onAdd(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  protected onError(data: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: data,
    });
  }
}
