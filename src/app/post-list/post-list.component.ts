import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: string;

  constructor() { }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    } else {
      return null;
    }
  }

  onLovit(value) {
    if (value === 'more') {
      this.postLoveIts ++;
    } else if (value === 'less') {
      this.postLoveIts --;
    } else {
      console.log('There is an error !');
    }
  }
}
