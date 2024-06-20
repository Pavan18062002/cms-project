import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.apiService.createArticle(this.articleForm.value).subscribe(response => {
        console.log('Article created successfully');
      });
    }
  }
}
