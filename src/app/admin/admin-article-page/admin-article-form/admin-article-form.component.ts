import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import * as Editor from '../../../ckCustomBuild/build/ckeditor';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { ArticleCategoryService } from 'src/app/services/articleCategory.service';
import CategoryDto from 'src/app/models/category';
import { ArticleCategory } from 'src/app/models/articleCategory';

@Component({
  selector: 'app-admin-article-form',
  templateUrl: './admin-article-form.component.html',
  styleUrls: ['./admin-article-form.component.css']
})
export class AdminArticleFormComponent implements OnInit {
  public Editor = Editor;
  articleForm: FormGroup;
  dateTime = new Date()
  categoryForm: FormGroup;
  articleId: number;
  articleCategory: ArticleCategory;


  //categoryChips
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = ['.Net Core'];
  allCategories: string[] = [];
  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  //categoryChips


  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private articleCategoryService: ArticleCategoryService,
    public categoryService: CategoryService,
    private toastrService: ToastrService,
  ) {
    //ChipsCategory
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) => (category ? this._filter(category) : this.allCategories.slice())),
    );
  }

  ngOnInit() {
    this.createArticleAddForm();
    this.createCategoryAddForm();
    this.getCategoryNames();
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
  createCategoryAddForm() {
    this.categoryForm = this.formBuilder.group({
      name: [""]
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
      this.articleId = response.data.articleId;
      this.toastrService.success("Successfully added.");
    });
  }
  addCategory() {
    this.articleCategoryService.add(this.articleId, this.categories).subscribe(response => {
      this.toastrService.success(response.message || 'Successfully added');
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

  getCategoryNames() {
    this.categoryService.getAllCategoryNames().subscribe(response => {
      this.allCategories = response.data;
    });
  }

  //CipsCategory
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.categories.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.categoryCtrl.setValue(null);
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(category => category.toLowerCase().includes(filterValue));
  }



}

