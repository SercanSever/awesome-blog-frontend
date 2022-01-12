import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import ArticleDto from 'src/app/models/article';
import CategoryDto from 'src/app/models/category';

import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AdminDeleteArticleModalComponent } from './admin-delete-article-modal/admin-delete-article-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.css']
})
export class AdminArticleListComponent implements OnInit {
  categories: CategoryDto[]
  page = 1;
  count = 0;
  tableSize = 20;

  constructor(
    public categoryService: CategoryService,
    private toastrService: ToastrService,
    public articleService: ArticleService,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.articleService.getArticles();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.articleService.getArticles();
  }

  openUpdatearticleModal(article: ArticleDto) {

  }
  openHardDeleteArticleModal(article: ArticleDto) {
    const dialog = this.dialog.open(AdminDeleteArticleModalComponent, {
      width: '500px',
      data: article
    });
  }
  softDeletearticle(article: ArticleDto) {
    this.articleService.softDeleteArticle(article.articleId).subscribe(response => {
      this.toastrService.success(response.message || 'Status change succesfully')
      this.articleService.getArticles();
    });
  }
}
