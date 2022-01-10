import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  articleAddForm: FormGroup
  dateTime = new Date()

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.createArticleAddForm();
  }

  createArticleAddForm() {
    this.articleAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      nameUrl: ["", Validators.required],
      summary: ["", Validators.required],
      author: ["", Validators.required],
      content: ["", Validators.required],
      uploadDate: [this.dateTime, Validators.required],
      updateDate: [""],
      imagesImageId: [""],
      commentsCommentId: [""],
      deletionDate: [null],
      isDeleted: [false, Validators.required]
    })
  }

  add() {
    if (!this.articleAddForm.valid) {
      this.toastrService.error('Lütfen gerekli alanları boş bırakmayın.');
      return;
    }

    let article: ArticleDto = { ...this.articleAddForm.value };
    this.articleService.add(article).subscribe((response) => {
      if (!response.success) return;
      this.toastrService.success("Makale başarıyla kaydedildi.");
    });
  }
}
