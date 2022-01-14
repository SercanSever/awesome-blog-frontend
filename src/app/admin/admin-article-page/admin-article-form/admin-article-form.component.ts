import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import * as Editor from '../../../ckCustomBuild/build/ckeditor';

@Component({
  selector: 'app-admin-article-form',
  templateUrl: './admin-article-form.component.html',
  styleUrls: ['./admin-article-form.component.css']
})
export class AdminArticleFormComponent implements OnInit {
  public Editor = Editor;
  articleForm: FormGroup
  dateTime = new Date()

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.createArticleAddForm();

  }

  createArticleAddForm() {
    this.articleForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      summary: ["", [Validators.required, Validators.maxLength(300)]],
      author: ["", [Validators.required, Validators.maxLength(30)]],
      content: ["", Validators.required],
      uploadDate: [this.dateTime, Validators.required],
      nameUrl: ["",]
    })
  }

  addArticle() {
    if (!this.articleForm.valid) {
      this.toastrService.error('Please fill in the required fields.');
      return;
    }

    let article: ArticleDto = { ...this.articleForm.value };
    this.articleService.add(article).subscribe((response) => {
      if (!response.success) return;
      this.toastrService.success("Successfully added.");
    });
  }


  public ckEditorConfig = {
    simpleUpload: {
      uploadUrl: `${this.apiUrl}/Images/UploadImage`
      // // Enable the XMLHttpRequest.withCredentials property.
      // withCredentials: true,
      // // Headers sent along with the XMLHttpRequest to the upload server.
      // headers: {
      //   'X-CSRF-TOKEN': 'CSRF-Token',
      //   Authorization: 'Bearer <JSON Web Token>'
      // }
    }
  }


}

