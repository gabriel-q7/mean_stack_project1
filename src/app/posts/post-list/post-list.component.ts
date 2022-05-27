import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

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
  @Input() posts: Post[] = [];

  constructor() {}

  ngOnInit(): void {}
}
