import { Injectable } from '@angular/core';
import { Course } from '../models/courses';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      { _id: '1', name: 'Curso de NestJS', category: 'backend' },
      { _id: '2', name: 'Curso de Springboot', category: 'backend' },
      { _id: '3', name: 'Curso de React', category: 'frontend' },
      { _id: '4', name: 'Curso de Angular', category: 'frontend' },
    ];
  }
}
