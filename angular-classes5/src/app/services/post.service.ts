import { Injectable, signal } from '@angular/core';
import { IPost, TCreatePostData } from '../interfaces/post.interface';
import { PostRequest } from '../api/post.request';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly postListSignal = signal<IPost[]>([]);

  constructor(private postRequest: PostRequest) { 
    this.postRequest.getPosts().subscribe(data => {
      this.postListSignal.set(data);
    })
  }

  getPosts(){
    return this.postListSignal();
  }

  create(formData: TCreatePostData){
    this.postRequest.create(formData)?.subscribe(data => {
      this.postListSignal.update((postList) => [...postList, data]);
    })
  }
}
