import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { GET_POSTS, Post, PostModel } from './app.dictionary';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private transformPosts(posts: PostModel[]): Post[] {
    return posts.map(({ title, body }) => ({ title, body }));
  }

  getPosts() {
    return from(fetch(GET_POSTS)).pipe(
      flatMap(res => res.json()),
      map(posts => this.transformPosts(posts))
    );
  }
}
