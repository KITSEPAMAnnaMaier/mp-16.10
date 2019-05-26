import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { GET_POSTS, Post, PostModel } from './app.dictionary';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private transformPosts(posts: PostModel[]): Post[] {
    return posts.map(({ title, body }) => ({ title, body }));
  }

  getPosts() {
    // or use fetch and fromPromise operator to make an Observable for API call
    return this.http.get<PostModel[]>(GET_POSTS).pipe(
      map(res => this.transformPosts(res))
    );
  }
}
