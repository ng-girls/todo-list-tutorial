import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.scss']
})
export class App {
  title = 'My To Do List APP';
}
