import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { title: 'First post', content: 'first content' },
  //   { title: 'Second post', content: 'second content' },
  //   { title: 'Third post', content: 'third content' },
  // ];
  posts = [];

  constructor() {}

  ngOnInit(): void {}
}
