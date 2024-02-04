import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first } from 'rxjs';
import { Course } from '../models/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private readonly API = 'http://localhost:8080/v1/courses';

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(first(), delay(1000));
  }
}
