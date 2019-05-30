import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, tap } from 'rxjs/operators';

import { AppService } from './app.service';
import { Post } from './app.dictionary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts$: Observable<Post[]>;
  clicks = new Subject<void>();
  search = new Subject<string>();

  posts: Post[];
  filteredPosts: Post[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.clicks.pipe(
      switchMap(() => this.appService.getPosts()),
    ).subscribe(posts => this.setPosts(posts));

    this.search.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap((searchTerm: string) =>
        this.filteredPosts = this.filterPosts(searchTerm))
    ).subscribe();
  }

  getPosts(): void {
    this.clicks.next();
  }

  searchPosts(searchTerm: string): void {
    this.search.next(searchTerm);
  }

  setPosts(posts: Post[]): void {
    this.posts = posts;
    this.filteredPosts = posts;
  }

  filterPosts(searchTerm: string): Post[] {
    return this.posts.filter(({ body }) => body.includes(searchTerm));
  }
}
