import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'create', component: CreateCourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
