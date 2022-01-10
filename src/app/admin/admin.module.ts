import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { ToastrModule } from 'ngx-toastr';
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
import { DataTablesModule } from 'angular-datatables';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminCategoryModalComponent } from './admin-category-modal/admin-category-modal.component';




@NgModule({
  declarations: [
    AdminComponent,
    AdminFormComponent,
    AdminNavbarComponent,
    GoogleLineChartComponent,
    GooglePieChartComponent,
    GoogleComboChartComponent,
    LastAddedArticlesComponent,
    AdminArticlesComponent,
    AdminArticleListComponent,
    AdminCategoryComponent,
    AdminCategoryListComponent,
    AdminCommentsComponent,
    AdminCommentsListComponent,
    AdminCategoryModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    DataTablesModule,
    MatIconModule,
    MatDialogModule,
    GoogleChartsModule
  ]
})
export class AdminModule { }
