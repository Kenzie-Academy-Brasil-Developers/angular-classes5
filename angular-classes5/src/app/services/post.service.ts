import { Injectable, signal } from '@angular/core';
import {
  IPost,
  TCreatePostData,
  TCreatePostFormData,
  TUpdatePostData,
} from '../interfaces/post.interface';
import { PostRequest } from '../api/post.request';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly postListSignal = signal<IPost[]>([]);
  readonly editingPostSignal = signal<IPost | null>(null);

  constructor(
    private postRequest: PostRequest,
    private userService: UserService
  ) {
    this.postRequest.getPosts().subscribe((data) => {
      this.postListSignal.set(data);
    });
  }

  getEditingPost() {
    return this.editingPostSignal();
  }

  setEditingPost(value: IPost | null) {
    this.editingPostSignal.set(value);
  }

  getPosts() {
    return this.postListSignal();
  }

  create(formData: TCreatePostFormData) {
    const user = this.userService.getUser();

    if (user) {
      const requestData = { ...formData, author: user.name };
      this.postRequest.create(requestData)?.subscribe((data) => {
        this.postListSignal.update((postList) => [...postList, data]);
      });
    }
  }

  update(formData: TUpdatePostData) {
    const editingPost = this.editingPostSignal();

    if (editingPost) {
      const id = editingPost.id;

      this.postRequest.update(id, formData)?.subscribe((data) => {
        this.postListSignal.update((postList) =>
          postList.map((post) => {
            if (post.id === id) {
              return data;
            } else {
              return post;
            }
          })
        );
      });
    }
  }

  delete(id: number) {
    this.postRequest.delete(id)?.subscribe(() => {
      this.postListSignal.update((postList) =>
        postList.filter((post) => post.id !== id)
      );
    });
  }
}
