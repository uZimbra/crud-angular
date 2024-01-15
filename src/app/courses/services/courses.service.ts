import { Injectable } from '@angular/core';
import { Course } from '../models/courses';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private readonly API = 'http://localhost:8080/v1/courses'

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API);
  }
}
