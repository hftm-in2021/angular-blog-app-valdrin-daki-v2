import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogPageComponent } from './add-blog-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddBlogPageComponent,
  },
];

@NgModule({
  declarations: [AddBlogPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class AddBlogPageModule {}
