import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-create-form.component.html',
  styleUrl: './post-create-form.component.scss'
})
export class PostCreateFormComponent {
  postCreateForm = new FormGroup({
    category: new FormControl(null),
    title: new FormControl(null),
    content: new FormControl(null),
  });
}
