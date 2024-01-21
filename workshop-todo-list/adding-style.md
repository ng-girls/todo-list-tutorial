# #14: 💅Ajout de style

Avec Angular, nous pouvons donner du style aux composants d'une manière qui n'affectera pas le reste de l'application. C'est une bonne pratique d'encapsuler le style lié au composant de cette façon.

Nous pouvons également définir des règles de style générales à utiliser dans toute l'application. C'est une bonne pratique pour créer le même look-and-feel pour tous nos composants. Par exemple, nous pouvons décider de la palette de couleurs qui sera utilisée comme thème de notre application. Ensuite, si nous voulons changer les couleurs ou offrir différents thèmes, nous pouvons le changer en un seul endroit, au lieu de chaque composant.

Angular nous donne différentes méthodes d'encapsulation du style, mais nous nous en tiendrons à la valeur par défaut.

Angular CLI a généré une feuille de style générale pour nous à `src/style.scss`. Collez le code suivant dans ce fichier:

{% code title="src/style.scss" %}
```css
html, body, div, span,
h1, p, ul, li {
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

body {
  background: #f1f1f1;
  font-size: 16px;
  line-height: 22px;
  color: #404040;
  font-family: 'Lucida Grande', Verdana, sans-serif;
}

ol, ul {
  list-style: none;
}

.btn {
  background: lightseagreen;
  color: #fff;
  padding: 3px 10px;
  margin: 0 0 0 3px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  vertical-align: bottom;
}

.btn:hover {
  background: lightslategrey;
}

.btn-red {
  background: red;
}

.btn-red:hover {
  background: darkred;
}

.app-title {
  font-size: 52px;
  line-height: 52px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
  letter-spacing: -0.8px;
}
```
{% endcode %}

> Comment le projet sait-il qu'il doit regarder ce fichier? Dans le fichier de configuration Angular CLI `angular.json` sous `projects.todo-list.architect.build.options.styles`, vous pouvez indiquer les fichiers que l'outil de construction doit prendre et ajouter au projet. Vous pouvez ouvrir les outils de développement du navigateur et voir le style à l'intérieur de l'élément:
>
> ```markup
> <html>
>  ...
>  <head>
>    ...
>    <style type="text/css">
>    ...Your style is here
>    </style>
>    ...
>  </head>
>  ...
> </html>
> ```

Nous avons ajouté du style directement aux éléments (`html, body, div, span, h1, p, ul, li`) qui affecteront notre application immédiatement. Nous avons également ajouté des styles en utilisant des sélecteurs de classe css. Nous devons ajouter ces noms de classe aux éléments pertinents.

Dans `app-root` ajoutez la classe `app-title` à l'élément `h1`:

{% code title="src/app/app.component.ts" %}
```markup
template: `
  <h1 class="app-title">
    Welcome to {{ title }}!
  </h1>

  <app-list-manager></app-list-manager>
`,
```
{% endcode %}

Dans `input-button-unit` ajoutez la classe `btn` à l'élément `button`:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<button class="btn"
        (click)="submitValue(inputElementRef.value)">
  Save
</button>
```
{% endcode %}

Maintenant nous allons ajouter des styles spécifiques au composant.

Ajoutez le style suivant à `input-button-unit.component.scss`:

{% code title="src/app/input-button-unit/input-button-unit.component.scss" %}
```css
.todo-input {
  padding: 4px 10px 4px;
  font-size: 16px;
  font-family: 'Lucida Grande', Verdana, sans-serif;
  line-height: 20px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  flex-grow: 1;
}

:host(:not([hidden])) {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
```
{% endcode %}

Comment cette feuille de style est-elle attachée au composant `input-button-unit`? Regardez le fichier `input-button-unit.component.ts`. L'une des propriétés de l'objet passé au décorateur `@Component` est `styleUrls`. C'est une liste de feuilles de style à utiliser par Angular, qui encapsule le style dans le composant.

Le sélecteur `:host` est appliqué à l'élément qui contient ce composant - `<app-input-button-unit>`. Cet élément ne fait pas partie du modèle de ce composant. Il apparaît dans le modèle de son parent. C'est ainsi que nous pouvons contrôler son style à partir du composant.

Nous devons ajouter la classe `todo-input` à l'élément `input`:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<input class="todo-input"
       #inputElementRef
       [value]="title"
       (keyup.enter)="submitValue(getInputValue($event))">
```
{% endcode %}

Maintenant nous allons ajouter du style spécifique au composant `list-manager`. Ouvrez le fichier `list-manager.component.scss` et collez le style suivant à l'intérieur:

{% code title="src/app/list-manager/list-manager.component.scss" %}
```css
.todo-app {
  position: relative;
  width: 400px;
  padding: 30px 30px 15px;
  background: white;
  border: 1px solid;
  border-color: #dfdcdc #d9d6d6 #ccc;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
}

.todo-app::before, .todo-app::after {
  content: '';
  position: absolute;
  z-index: -1;
  height: 4px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.todo-app::after {
  bottom: -3px;
  left: 0;
  right: 0;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.todo-app::before {
  bottom: -5px;
  left: 2px;
  right: 2px;
  border-color: #c4c4c4;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}
```
{% endcode %}

Nous allons envelopper le contenu de ce composant avec un élément `<div>` avec la classe `todo-app`.

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
template: `
  <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      @for(let todoItem of todoList; track todoItem.title) {
        <li>
          <app-todo-item [item]="todoItem"></app-todo-item>
        </li>
      }
    </ul>
  </div>
`,
```
{% endcode %}

Enfin ajoutez le style suivant à `todo-item.component.scss`:

{% code title="src/app/todo-item/todo-item.component.scss" %}
```css
.todo-item {
  padding: 10px 0;
  border-top: solid 1px #ddd;
  min-height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}

.todo-checkbox {
  flex-shrink: 0;
  margin: auto 1ex auto 0;
}

.todo-title {
  flex-grow: 1;
  padding-left: 11px;
}
```
{% endcode %}

Placez le contenu du composant `todo-item` dans un élément `<div>` avec la classe `todo-item`:

```markup
<div class="todo-item">
  {{ item.title }}
</div>
```

Nous utiliserons les classes `todo-checkbox` et `todo-title` plus tard.

Vous pouvez changer le style comme vous le souhaitez - la taille des éléments, les couleurs - comme vous le souhaitez !

Note: Vous pouvez utiliser des fichiers [SCSS](https://www.freecodecamp.org/news/the-complete-guide-to-scss-sass-30053c266b23/) dans le projet, ce qui est une façon plus agréable d'écrire du style. Il a de grandes fonctionnalités qui aident le développeur. Les fichiers SCSS sont compilés en CSS lorsque le projet est construit.

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
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_14-adding-style)
{% endhint %}
