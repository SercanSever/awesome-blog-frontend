import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: "", component: BlogComponent },
  { path: "articles", component: BlogArticlesComponent },
  { path: "category/:categoryId", component: BlogArticlesComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
