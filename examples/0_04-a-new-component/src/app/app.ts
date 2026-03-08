import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-input-button-unit></app-input-button-unit>
  `,
  styleUrls: ['./app.scss']
})
export class App {
  title = 'todo-list';
}
