import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-delete-article-modal',
  templateUrl: './admin-delete-article-modal.component.html',
  styleUrls: ['./admin-delete-article-modal.component.css']
})
export class AdminDeleteArticleModalComponent {

  constructor(
    private toastrService: ToastrService,
    private dialogRef: MatDialogRef<AdminDeleteArticleModalComponent>,
    private articleService: ArticleService,
    @Inject(MAT_DIALOG_DATA) public data: ArticleDto
  ) { }

  deleteArticle() {
    this.articleService.hardDeleteArticle(this.data.articleId).subscribe(response => {
      this.articleService.getArticles();
      this.dialogRef.close();
      this.toastrService.success(response.message || 'Successfully deleted.');
    })
  }

}
