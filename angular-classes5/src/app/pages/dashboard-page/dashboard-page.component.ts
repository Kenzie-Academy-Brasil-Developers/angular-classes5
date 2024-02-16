import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PrivateRouteComponent } from '../../components/private-route/private-route.component';
import { PostCreateFormComponent } from '../../components/forms/post-create-form/post-create-form.component';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { PostEditFormComponent } from '../../components/forms/post-edit-form/post-edit-form.component';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [PrivateRouteComponent, PostCreateFormComponent, PostEditFormComponent, CommonModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  get user() {
    return this.userService.getUser();
  }

  get postList() {
    return this.postService.getPosts();
  }
  
  get editingPost() {
    return this.postService.getEditingPost();
  }

  handleEdit(post: IPost){
    this.postService.setEditingPost(post);
  }

  handleRemove(id: number){
    this.postService.delete(id);
  }

  handleLogout() {
    this.userService.logout();
  }
}
