import { Component } from '@angular/core';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../models/courses';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = [
    { _id: '1', name: 'Curso de NestJS', category: 'backend' },
    { _id: '2', name: 'Curso de Springboot', category: 'backend' },
    { _id: '3', name: 'Curso de React', category: 'frontend' },
    { _id: '4', name: 'Curso de Angular', category: 'frontend' },
  ];
  displayedColumns = ['name', 'category'];
}
