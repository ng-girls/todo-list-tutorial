# #9: 📋 The To Do list

Maintenant vous allez ajouter la liste des tâches à faire elle-même au composant `app-root`. Ouvrez le fichier `src/app/app.component.ts`. Ajoutez la liste des éléments à l'intérieur de la classe `AppComponent` comme un tableau d'objets pour chaque élément. À ce stade, chaque élément ne contient qu'un titre :

{% code title="src/app/app.component.ts" %}
```typescript
export class AppComponent {
  title = 'todo-list';
  todoList = [
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

> Placer des informations (des ressources) directement dans votre code s'appelle du hardcoding et est considéré comme une mauvaise pratique. À terme, nous obtiendrons la liste à partir d'une source externe, mais même si ce n'est pas le cas, il est préférable de placer les données fictives dans leurs propres fichiers. Mais avançons étape par étape, donc définir les éléments de cette façon est correct pour le moment.

## @for loop

Maintenant vous devez dire au navigateur d'afficher ces éléments. Pour cela, vous utiliserez le **bloc de contrôle intégré d'Angular,** `@for`. Il fonctionne comme une boucle dans n'importe quel langage de programmation, itérant sur un tableau et rendant le modèle donné, avec les données de l'élément actuel.

Pour afficher une liste en HTML, nous pouvons utiliser une liste ordonnée avec `<ol>` ou une liste non ordonnée avec `<ul>`. Dans cet élément, chaque élément sera inséré dans un élément `<li>`. La notation `@for` entourera l'élément de la liste. Insérez la balise `<ul>` et la boucle juste après `<app-input-button-unit></app-input-button-unit>` comme ceci:

{% code title="src/app/app.component.ts" %}
```markup
template: `
  <h1>
    Welcome to {{ title }}!
  </h1>

  <app-input-button-unit></app-input-button-unit>

  <ul>
    @for(let todoItem of todoList; track todoItem.title) {
      <li>
        {{ todoItem.title }}
      </li>
    }
  </ul>
`,
```
{% endcode %}

Cela signifie "parcourir tous les éléments du tableau `todoList` défini dans la classe, et imprimer une liste qui contient les titres des éléments". Pendant la boucle sur la `todoList`, chaque élément est assigné à la variable de modèle `todoItem`, et nous pouvons utiliser cette variable à l'intérieur de l'élément dans lequel nous la définissons (dans ce cas l'élément `li`) et ses enfants.&#x20;

La fonction `track` indique à Angular par quelle propriété de l'élément il doit suivre les changements dans la liste. Il s'agit généralement d'une valeur unique pour chaque élément (généralement un ID). Lorsque la liste change (des éléments sont ajoutés, supprimés, déplacés ou modifiés), Angular vérifie les éléments par cette propriété et ne rend que ceux qui ont une valeur différente de celle d'avant.

Dans notre cas pour le moment, nous supposons que le titre est unique pour chaque élément. Une meilleure façon de gérer les éléments est d'ajouter une propriété `id` à chacun, en attribuant une valeur unique à chaque `todoItem.id` et en attribuant une nouvelle valeur `id` si le `title` change (sinon le changement de `title` ne sera pas révélé à l'écran).

## @if statement

Un autre bloc de contrôle de flux dans Angular est `@if`. Il reçoit une expression booléenne. Angular ne rendra le modèle dans le bloc que si l'expression est vraie. Les blocs facultatifs `@else if` et `else` étendent le flux.

{% code title="code for example" %}
```markup
@if(userLoggedIn) {
    <h1>Welcome!</h1>
    <h2>You are logged in</h2>
} @else {
    <h3>Please log in</h3>
}
```
{% endcode %}

Dans cet exemple, `userLoggedIn` doit être un membre du composant, et avoir une valeur vraie ou fausse. S'il est vrai, les éléments `h1` et `h2` seront affichés. Si c'est faux, les éléments n'existeront pas dans le DOM. (Ils ne sont pas masqués en utilisant le style - ils n'existent pas du tout.) Au lieu de cela, l'élément `h3` sera affiché.&#x20;

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
