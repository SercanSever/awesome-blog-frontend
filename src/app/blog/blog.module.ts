import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogInfoComponent } from './blog-info/blog-info.component';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { NgxPaginationModule } from 'ngx-pagination';





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
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    NgxPaginationModule
  ]
})
export class BlogModule { }
