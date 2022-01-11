import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { GoogleLineChartComponent } from './google-line-chart/google-line-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GooglePieChartComponent } from './google-pie-chart/google-pie-chart.component';
import { GoogleComboChartComponent } from './google-combo-chart/google-combo-chart.component';
import { MatTableModule } from '@angular/material/table';
import { LastAddedArticlesComponent } from './last-added-articles/last-added-articles.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminArticleListComponent } from './admin-article-list/admin-article-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminCommentsComponent } from './admin-comments/admin-comments.component';
import { AdminCommentsListComponent } from './admin-comments-list/admin-comments-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminCategoryModalComponent } from './admin-category-modal/admin-category-modal.component';
import { MatCardModule } from '@angular/material/card';
import { AdminCategorySearchComponent } from './admin-category-list/admin-category-search/admin-category-search.component';
import { AdminCategorySelectOptionsComponent } from './admin-category-list/admin-category-select-options/admin-category-select-options.component';
import { MatSelectModule } from '@angular/material/select';
import { AdminDeleteCategoryModalComponent } from './admin-delete-category-modal/admin-delete-category-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    GoogleLineChartComponent,
    GooglePieChartComponent,
    GoogleComboChartComponent,

    LastAddedArticlesComponent,
    AdminComponent,
    AdminFormComponent,
    AdminNavbarComponent,
    AdminArticlesComponent,
    AdminArticleListComponent,
    AdminCategoryComponent,
    AdminCategoryListComponent,
    AdminCommentsComponent,
    AdminCommentsListComponent,
    AdminCategoryModalComponent,
    AdminCategorySearchComponent,
    AdminCategorySelectOptionsComponent,
    AdminDeleteCategoryModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,

    NgxPaginationModule,

    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class AdminModule { }
