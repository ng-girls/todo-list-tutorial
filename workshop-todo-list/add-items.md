# #12: 📌Add items
# #12: 📌Ajouter des éléments

Nous voulons ajouter des éléments à notre liste. Avec Angular, nous pouvons le faire facilement et voir l'élément ajouté immédiatement. Nous le ferons à partir du composant `input-button-unit` que nous avons créé précédemment. Nous allons le modifier pour que lorsque vous appuyez sur la touche Entrée ou cliquez sur le bouton de soumission, la valeur de la zone de saisie devienne le titre du nouvel élément, et le nouvel élément sera ajouté à la liste.

Mais nous ne voulons pas que le composant `input-button-unit` soit responsable de l'ajout d'un nouvel élément à la liste. Nous voulons qu'il ait une responsabilité minimale, et **déléguer l'action à son composant parent**. L'un des avantages de cette approche est que ce composant sera réutilisable, et peut être attaché à une action différente dans différentes situations.

Par exemple, dans notre cas, nous pourrons utiliser le composant `input-button-unit` à l'intérieur du composant `todo-item`. Nous aurons alors une zone de saisie pour chaque élément et nous pourrons modifier le titre de l'élément. Dans ce cas, appuyer sur la touche Entrée ou sur le bouton Enregistrer aura un effet différent.

Alors ce que nous voulons vraiment faire, c'est **émettre un événement** à partir du composant `input-button-unit` chaque fois que le titre est modifié. Avec Angular, nous pouvons facilement définir et émettre des événements à partir de nos composants !

## @Output()

Ajoutez la ligne suivante à l'intérieur de la classe `InputButtonUnitComponent`, qui définit une sortie pour le composant :

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
@Output() submit: EventEmitter<string> = new EventEmitter<string>();
```
{% endcode %}

La propriété `@Output` s'appelle `submit`. C'est de type `EventEmitter` qui a la méthode `emit`. `EventEmitter` est un type générique - nous lui passons un autre type qui sera utilisé en interne, dans ce cas c'est `string`. C'est le type de l'objet qui sera émis par la méthode `emit`.

Assurez-vous que `Output` et `EventEmitter` sont ajoutés à la déclaration d'importation dans la première ligne du fichier :

{% code title="src/app/input-button-unit.component.ts" %}
```typescript
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
```
{% endcode %}

Maintenant, chaque fois que nous appelons `this.submit.emit()`, un événement sera émis vers le composant parent. Appelons-le dans la méthode `changeTitle` :

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
}
```
{% endcode %}

Nous déléguons tout au composant parent - même le changement du titre de l'élément si nécessaire.

Nous passons `newTitle` lorsque nous émettons l'événement. Tout ce que nous passons dans `emit()` sera disponible pour le parent en tant que `$event`. Les événements émis par `keyup.enter` et `click` appellent toujours la même méthode, mais la méthode elle-même a changé.

Le nom de la méthode ne correspond plus à l'action qu'elle fournit. Changeons-le pour quelque chose de plus approprié : `submitValue`. Vous pouvez utiliser les outils de l'IDE pour renommer la méthode - assurez-vous qu'elle est également modifiée dans le modèle.

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
submitValue(newTitle: string) {
  this.submit.emit(newTitle);
}
```
{% endcode %}

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
template: `
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="submitValue(getInputValue($event))">

  <button (click)="submitValue(inputElementRef.value)">
    Save
  </button>
`,
```
{% endcode %}

### Ecoutons l'événement

Maintenant nous devons simplement attraper l'événement dans le composant parent et y attacher la logique. Allez dans le composant `app-root` et liez l'événement `submit` dans le composant `<app-input-button-unit>` :

{% code title="src/app/app.component.ts" %}
```markup
<app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
```
{% endcode %}

Maintenant, il ne reste plus qu'à implémenter la méthode `addItem`, qui reçoit une chaîne de caractères, crée un objet avec la chaîne comme propriété `title`, et l'ajoute à la liste :

{% code title="src/app/app.component.ts" %}
```typescript
addItem(title: string) {    
  this.todoList.push({ title });
}
```
{% endcode %}

Essayez - entrez un nouveau titre d'élément à faire dans le champ de saisie et soumettez-le !

**Note:** Nous utilisons **ES6 Object Property Value Shorthand** pour construire l'objet élément à faire. Si nous utilisons une variable avec le même nom que la propriété de l'objet à laquelle nous voulons assigner la valeur de la variable, nous pouvons utiliser cette notation abrégée. Dans notre cas, `{ title }` est équivalent à `{ title: title }`. Si la chaîne était stockée dans une variable avec un nom différent, nous n'aurions pas pu utiliser la notation abrégée. Par exemple:

{% code title="code for example" %}
```typescript
addItem(value: string) {    
  this.todoList.push({ title: value });
}
```
{% endcode %}

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
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_12-add-items)
{% endhint %}
