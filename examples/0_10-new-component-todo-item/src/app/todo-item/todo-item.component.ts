import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],

  selector: 'app-todo-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item!: any;

}
