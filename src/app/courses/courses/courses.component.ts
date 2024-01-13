import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  constructor(private coursesService: CoursesService) {}

  courses: Course[] = this.coursesService.list();
  displayedColumns = ['name', 'category'];
}
