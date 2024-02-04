import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AppMaterialModule } from '../../shared/app-material.module';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses$: Observable<Course[]> = this.coursesService.list();
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {}
}
