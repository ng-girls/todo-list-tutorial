import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [InputButtonUnitComponent],

  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-input-button-unit></app-input-button-unit>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
}
