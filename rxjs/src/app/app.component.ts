import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppService } from './app.service';
import { Post } from './app.dictionary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.posts$ = this.appService.getPosts();
  }
}
