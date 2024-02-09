import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TCreatePostData } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostRequest {
  private BASE_URL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  create(data: TCreatePostData) {
    const token = localStorage.getItem('@TOKEN');

    if (token) {
      const parsedToken = JSON.parse(token);

      return this.http.post(`${this.BASE_URL}/news`, data, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
    } else {
      return null;
    }
  }

  getPosts() {
    return this.http.get(`${this.BASE_URL}/news`);
  }

  update() {
    
  }

  delete() {}
}