import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticlePageComponent } from './admin-article-page/admin-article-page.component';
import { AdminCategoryPageComponent } from './admin-category-page/admin-category-page.component';
import { AdminCommentPageComponent } from './admin-comment-page/admin-comment-page.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: "dashboard", component: AdminComponent },
  { path: "articles", component: AdminArticlePageComponent },
  { path: "articles/add", component: AdminFormComponent },
  { path: "categories", component: AdminCategoryPageComponent },
  { path: "comments", component: AdminCommentPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
