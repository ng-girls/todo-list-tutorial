# #13: 🚧 Refactor App Component

Nous allons effectuer un petit refactoring. L'`app-root` ne devrait pas avoir un template aussi grand et toute cette logique. Il devrait simplement appeler un autre composant qui s'en occupera.


* Créer un composant nommé `list-manager` avec la commande suivante:

```bash
ng g c list-manager
```

* Déplacer le code du composant `app-root` vers `list-manager`. &#x20;
* Vous pouvez garder le titre dans `app-root`, et lui donner une belle valeur.
* Attention à ne pas changer le nom de la classe du composant `list-manager`!

{% code title="src/app/app.component.ts" %}
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My To-Do List App';
}
```
{% endcode %}

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule],
  template: `
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      @for(let todoItem of todoList; track todoItem.title) {
        <li>
          <app-todo-item [item]="todoItem"></app-todo-item>
        </li>
      }       
    </ul>
  `,
  styleUrl: './list-manager.component.scss'
})
export class ListManagerComponent {
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
```
{% endcode %}

* utilisez le nouveau composant à partir du template `app-root`:

{% code title="src/app/app.component.ts" %}
```markup
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
```
{% endcode %}

Voilà! Nous pouvons continuer.

{% hint style="info" %}
💾 **Pusher votre code sur GitHub**

Commit all your changes by running this command in your project directory.
Committez tous vos changements en exécutant cette commande dans votre répertoire de projet.

```bash
git add -A && git commit -m "votre message de commit"
```

Pusher vos changements sur GitHub en exécutant cette commande dans votre répertoire de projet.

```
git push
```
{% endhint %}
