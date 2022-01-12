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
import { AdminArticleListComponent } from './admin-article-list/admin-article-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminCategoryModalComponent } from './admin-category-list/admin-category-modal/admin-category-modal.component';
import { MatCardModule } from '@angular/material/card';
import { AdminCategorySearchComponent } from './admin-category-list/admin-category-search/admin-category-search.component';
import { AdminCategorySelectOptionsComponent } from './admin-category-list/admin-category-select-options/admin-category-select-options.component';
import { MatSelectModule } from '@angular/material/select';
import { AdminDeleteCategoryModalComponent } from './admin-category-list/admin-delete-category-modal/admin-delete-category-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminCategoryPageComponent } from './admin-category-page/admin-category-page.component';
import { AdminCommentPageComponent } from './admin-comment-page/admin-comment-page.component';
import { AdminArticlePageComponent } from './admin-article-page/admin-article-page.component';
import { AdminCommentListComponent } from './admin-comment-list/admin-comment-list.component';
import { MatBadgeModule } from '@angular/material/badge';
import { AdminArticleSearchComponent } from './admin-article-list/admin-article-search/admin-article-search.component';
import { AdminArticleSelectOptionComponent } from './admin-article-list/admin-article-select-option/admin-article-select-option.component';
import { AdminArticleDateSelectComponent } from './admin-article-list/admin-article-date-select/admin-article-date-select.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { AdminArticleFilterCategoryComponent } from './admin-article-list/admin-article-filter-category/admin-article-filter-category.component';
import { AdminDeleteArticleModalComponent } from './admin-article-list/admin-delete-article-modal/admin-delete-article-modal.component';
import { AdminArticleAddPageComponent } from './admin-article-add-page/admin-article-add-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    GoogleLineChartComponent,
    GooglePieChartComponent,
    GoogleComboChartComponent,

    LastAddedArticlesComponent,
    AdminComponent,
    AdminFormComponent,
    AdminNavbarComponent,
    AdminArticleListComponent,
    AdminCategoryListComponent,
    AdminCategoryModalComponent,
    AdminCategorySearchComponent,
    AdminCategorySelectOptionsComponent,
    AdminDeleteCategoryModalComponent,
    AdminCategoryPageComponent,
    AdminCommentPageComponent,
    AdminArticlePageComponent,
    AdminCommentListComponent,
    AdminArticleSearchComponent,
    AdminArticleSelectOptionComponent,
    AdminArticleDateSelectComponent,
    AdminArticleFilterCategoryComponent,
    AdminDeleteArticleModalComponent,
    AdminArticleAddPageComponent
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
    MatSelectModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatProgressBarModule
  ]
})
export class AdminModule { }
