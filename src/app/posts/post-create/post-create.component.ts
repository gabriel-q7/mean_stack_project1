import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  newPost = 'no content';

  onAddPost() {
    this.newPost = "The user's post";
    alert('post added!');
  }
}
