import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first } from 'rxjs';
import { Course } from '../models/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'http://localhost:8080/v1/course';

  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(first(), delay(1000));
  }

  public save(course: Course): Observable<Course> {
    console.log('salvou?', course);
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }
}
