import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { TCreatePostFormData } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-post-create-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-create-form.component.html',
  styleUrl: './post-create-form.component.scss'
})
export class PostCreateFormComponent {
  constructor(private postService: PostService) {}

  postCreateForm = new FormGroup({
    category: new FormControl<string | null>(null),
    title: new FormControl<string | null>(null),
    content: new FormControl<string | null>(null),
  });

  submit(){
    const data = this.postCreateForm.value as TCreatePostFormData;
    this.postService.create(data);
    this.postCreateForm.reset();
  }
}
