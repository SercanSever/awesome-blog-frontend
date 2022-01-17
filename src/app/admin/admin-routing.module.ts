import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticleFormComponent } from './admin-article-page/admin-article-form/admin-article-form.component';
import { AdminArticlePageComponent } from './admin-article-page/admin-article-page.component';
import { AdminCategoryPageComponent } from './admin-category-page/admin-category-page.component';
import { AdminCommentPageComponent } from './admin-comment-page/admin-comment-page.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: "dashboard", component: AdminComponent },
  { path: "articles", component: AdminArticlePageComponent },
  { path: "article/add", component: AdminArticleFormComponent },
  { path: "categories", component: AdminCategoryPageComponent },
  { path: "comments", component: AdminCommentPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
