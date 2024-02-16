import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PrivateRouteComponent } from '../../components/private-route/private-route.component';
import { PostCreateFormComponent } from '../../components/forms/post-create-form/post-create-form.component';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [PrivateRouteComponent, PostCreateFormComponent, CommonModule],
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

  handleLogout() {
    this.userService.logout();
  }
}
