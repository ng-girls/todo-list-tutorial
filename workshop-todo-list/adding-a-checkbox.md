# #19: 🔘Ajout d'une checkbox

Nous sommes maintenant capables d'interagir avec notre liste de choses à faire en supprimant des éléments. Mais que se passe-t-il si nous voulons compléter des éléments et être toujours capable de les voir dans notre liste, avec une ligne à travers le titre de l'élément ? Une checkbox !

Dans cette section, nous allons:

* Ajouter une chebkbox
* Ajouter une fonctionnalité lorsque vous cliquez sur la case à cocher afin qu'une classe CSS, qui ajoute un style ~~strikethrough~~, soit ajoutée à nos éléments à faire
* Ajouter une fonctionnalité pour enregistrer l'état de l'élément dans le local storage
* Ajouter une nouvelle classe CSS

Ajoutons une checkbox dans notre fichier `todo-item.component.ts`. Placez le code suivant juste avant `{{ item.title }}` :

{% code title="src/app/todo-item/todo-item.component.ts" %}
```markup
<input type="checkbox"/>
```
{% endcode %}

Maintenant pour que la checkbox fasse quelque chose, nous devons ajouter un gestionnaire d'événements `click` que nous appellerons `completeItem`. Nous allons également ajouter une classe css et envelopper l'élément et l'interpolation ensemble pour le style. Faisons-le maintenant :

{% code title="src/app/todo-item/todo-item.component.ts" %}
```markup
<div>
  <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"/>
  {{ item.title }}
</div>
```
{% endcode %}

Quand nous cliquons sur la case à cocher, elle exécute la méthode `completeItem`. Parlons de ce que cette méthode doit accomplir. Nous voulons être capable de basculer un style CSS sur le titre de l'élément de sorte que lorsque la case à cocher est cochée, il aura un ~~strikethrough~~. Nous voulons également enregistrer l'état de l'élément dans le stockage local. Pour ce faire, nous émettrons un événement de mise à jour avec le nouveau statut de l'élément et le capturerons dans le composant parent.

{% code title="src/app/todo-item/todo-item.component.ts" %}
```javascript
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  // put this method below ngOnInit
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }
```
{% endcode %}

Afin que la case à cocher reflète le statut terminé, nous devons ajouter une liaison de propriété pour son statut vérifié comme ceci:

{% code title="src/app/todo-item/todo-item.component.ts" %}
```markup
<div>
  <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"
         [checked]="item.completed"/>
  {{ item.title }}
</div>
```
{% endcode %}

Attendez! Comment est-ce que tout cela va affecter le titre de la todo quand nous ne touchons qu'à la case à cocher? Eh bien, Angular a cette merveilleuse directive appelée NgClass. Cette directive applique ou supprime une classe CSS en fonction d'une expression booléenne (vrai ou faux). Il existe de nombreuses façons d'utiliser cette directive (voir la documentation de la directive [NgClass](https://angular.io/api/common/NgClass)) mais nous nous concentrerons sur son utilisation comme ceci:

```markup
<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
```

les classes 'first' et 'second' seront appliquées à l'élément parce qu'elles sont données une valeur vraie, tandis que la classe 'third' ne sera pas appliquée parce qu'elle est donnée une valeur fausse. C'est donc là que notre code précédent entre en jeu. Notre méthode `completeItem` basculera entre les valeurs vraies et fausses, dictant ainsi si une classe doit être appliquée ou supprimée.

Plaçons le titre de l'élément dans un `<span>`, puis utilisons NgClass pour appliquer le style. En fonction du champ terminé de l'élément actuel, nous affichons la décoration de la ligne ou non :

```markup
<span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  {{ item.title }}
</span>
```

Et enfin, ajoutez le CSS à notre fichier `todo-item.component.scss` :

```css
  .todo-complete {
    text-decoration: line-through;
  }
```

La prochaine étape consiste à dire à l'élément parent list-manager quoi faire, lorsque l'événement de mise à jour est émis. Pour ce faire, nous devons lier l'action de mise à jour et la méthode de mise à jour qui déclenchera une fonction appropriée dans TodoListService. Trouvez le sélecteur todo-item dans le modèle (il ressemble à ceci):

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
<li>
  <app-todo-item [item]="todoItem"
     (remove)="removeItem($event)"></app-todo-item>
</li>
```
{% endcode %}

Et ajoutez les modifications :

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
<li>
  <app-todo-item [item]="todoItem"
     (remove)="removeItem($event)"
     (update)="updateItem($event.item, $event.changes)"></app-todo-item>
</li>
```
{% endcode %}

Enfin créer une méthode supplémentaire pour gérer cet événement de mise à jour de l'élément. Il ressemblera beaucoup à la fonction `removeItem` :

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
updateItem(item, changes) {
  this.todoListService.updateItem(item, changes);
}
```
{% endcode %}

Voilà! Cocher la case à cocher doit appliquer une ligne à travers le titre de la todo, et décocher la case à cocher doit supprimer la ligne.

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
