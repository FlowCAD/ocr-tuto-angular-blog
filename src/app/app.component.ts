import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createdAt = new Date();
  // tslint:disable-next-line:max-line-length
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio velit, aliquet non risus eu, sollicitudin convallis quam. Maecenas tristique, justo id dictum vehicula, velit sapien viverra tortor, vitae semper libero arcu ac dolor. Aenean dapibus vestibulum nibh quis suscipit. Aliquam in convallis neque, a pellentesque felis. Nam et feugiat ipsum. Nullam nec nisi a orci imperdiet dictum.';
  posts = [
    {
      title: 'Mon premier post',
      content: this.lorem,
      loveIts: 10,
      created_at: this.createdAt
    }, {
      title: 'Mon second post',
      content: this.lorem,
      loveIts: -5,
      created_at: this.createdAt
    }, {
      title: 'Encore un post',
      content: this.lorem,
      loveIts: 0,
      created_at: this.createdAt
    }
  ];

  constructor() {}
}
