import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import templateString from './app.component.html';

@Component({
  selector: 'hello-angular',
  template: templateString,
  // styleUrls : [ './app.component.scss']
})
export class AppComponent {
  name = 'Angular with Rails BOIS!';

  constructor(private http: HttpClient) {}

  changeName() {
    return this.http.get('/hello_angular/name').subscribe(data => {
      this.name = data['name'];
    });
  }
}
