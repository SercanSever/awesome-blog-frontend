import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminCommentsComponent } from './admin-comments/admin-comments.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: "dashboard", component: AdminComponent },
  { path: "articles", component: AdminArticlesComponent },
  { path: "articles/add", component: AdminFormComponent },
  { path: "categories", component: AdminCategoryComponent },
  { path: "comments", component: AdminCommentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
