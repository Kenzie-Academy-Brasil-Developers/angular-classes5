import { Injectable, signal } from '@angular/core';
import {
  IPost,
  TCreatePostData,
  TUpdatePostData,
} from '../interfaces/post.interface';
import { PostRequest } from '../api/post.request';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly postListSignal = signal<IPost[]>([]);

  constructor(private postRequest: PostRequest) {
    this.postRequest.getPosts().subscribe((data) => {
      this.postListSignal.set(data);
    });
  }

  getPosts() {
    return this.postListSignal();
  }

  create(formData: TCreatePostData) {
    this.postRequest.create(formData)?.subscribe((data) => {
      this.postListSignal.update((postList) => [...postList, data]);
    });
  }

  update(id: number, formData: TUpdatePostData) {
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

  delete(id: number) {
    this.postRequest.delete(id)?.subscribe(() => {
      this.postListSignal.update((postList) => postList.filter(post => post.id !== id));
    })
  }
}
