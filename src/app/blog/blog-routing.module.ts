import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import {BlogArticleDetailComponent} from "./blog-article-detail/blog-article-detail.component";
import {BlogArticlesComponent} from "./blog-articles/blog-articles.component";

const routes: Routes = [
  { path: "", component: BlogComponent },
  { path: "ana-sayfa", component: BlogComponent },
  { path: "category/:name", component: BlogComponent },
  { path: ":nameUrl", component: BlogArticleDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
