# #11: ⛓ Interface

Nous voulons utiliser les capacités de TypeScript pour savoir quel type d'objet nous passons en tant qu'`item` au composant `todo-item`. Nous nous assurerons que l'élément est du bon type. Mais son type n'est pas une simple chaîne, un nombre ou un booléen. Nous allons définir le type de l'élément en utilisant une **interface**.


> Les interfaces n'existent que dans TypeScript et sont supprimées lorsque le code est compilé en JavaScript. En JavaScript, nous ne pouvons pas imposer la sécurité des types par défaut.

Créez une interface `TodoItem` dans un nouveau dossier `interfaces` avec l'Angular CLI:

```bash
ng g i interfaces/todo-item
```

`ì` est l'abréviation de... vous l'avez deviné - interface. En ajoutant un chemin dans la commande à l'interface Angular CLI génère les dossiers que vous avez spécifiés s'ils n'existent pas déjà.

Dans votre IDE, ouvrez le fichier nouvellement créé `src/app/interfaces/todo-item.ts`:

{% code title="src/app/interfaces/todo-item.ts" %}
```typescript
export interface TodoItem {
}
```
{% endcode %}

Maintenant, nous pouvons définir quelles propriétés et/ou méthodes chaque objet de type TodoItem doit avoir. À ce stade, nous allons ajouter deux membres:

* `title` qui doit être de type `string`
* `completed` qui est de type `boolean` et est un membre facultatif

{% code title="src/app/interfaces/todo-item.ts" %}
```typescript
export interface TodoItem {
  title: string;
  completed?: boolean;
}
```
{% endcode %}

Definissons l'`@Input` de l'élément pour qu'il soit du type que nous avons créé. Cela permettra à l'IDE de nous suggérer les membres disponibles lorsque nous utilisons l'élément dans la classe et le modèle du composant.

{% code title="src/app/todo-item/todo-item.component.ts" %}
```typescript
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
```
{% endcode %}

Nous devons importer l'interface dans ce fichier.

{% code title="src/app/todo-item/todo-item.component.ts" %}
```typescript
import { TodoItem } from '../interfaces/todo-item';
```
{% endcode %}

Maintenant, définissons la liste des éléments à faire pour contenir des objets du type `TodoItem`.

{% code title="src/app/app.component.ts" %}
```typescript
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
```
{% endcode %}

Encore une fois, vous devez importer l'interface dans ce fichier.

{% code title="src/app/app.component.ts" %}
```typescript
import { TodoItem } from './interfaces/todo-item';
```
{% endcode %}

Maintenant essayez de supprimer le titre de l'un des objets de la liste. Que se passe-t-il?

{% hint style="info" %}
💾 **Save your code to GitHub**

StackBlitz users - press **Save** in the toolbar and continue to the next section of the tutorial.

Commit all your changes by running this command in your project directory.

```
git add -A && git commit -m "Your Message"
```

Push your changes to GitHub by running this command in your project directory.

```
git push
```
{% endhint %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_11-interface)
{% endhint %}
