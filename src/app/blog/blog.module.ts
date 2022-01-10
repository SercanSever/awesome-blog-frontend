import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogInfoComponent } from './blog-info/blog-info.component';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { ToastrModule } from 'ngx-toastr';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';



@NgModule({
  declarations: [
    BlogComponent,
    FilterPipe,
    BlogCategoriesComponent,
    BlogInfoComponent,
    BlogArticlesComponent,
    BlogNavbarComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
