import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { TUpdatePostData } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-post-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-edit-form.component.html',
  styleUrl: './post-edit-form.component.scss'
})
export class PostEditFormComponent {
  constructor(private postService: PostService) {}

  get editingPost(){
    return this.postService.getEditingPost();
  }

  postEditForm = new FormGroup({
    category: new FormControl<string | null>(this.editingPost?.category as string),
    title: new FormControl<string | null>(this.editingPost?.title as string),
    content: new FormControl<string | null>(this.editingPost?.content as string),
  })

  submit(){
    const data = this.postEditForm.value as TUpdatePostData;

    this.postService.update(data);
    this.postService.setEditingPost(null);
  }
}
