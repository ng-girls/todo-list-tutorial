# #4: ✏ A new component
# #4: ✏ Un nouveau composant

Dans ce chapitre, nous allons écrire un tout nouveau composant. Il nous permettra d'ajouter un élément à la liste des tâches à effectuer. Il sera composé des éléments HTML `input` et `button`. Nous l'appellerons Input-Button-Unit.

Nous utiliserons l'interface de ligne de commande Angular pour générer tous les fichiers et le code de démarrage dont nous avons besoin. L'interface de ligne de commande Angular prend des commandes dans une fenêtre de terminal. Cela ne signifie pas que nous devons arrêter le processus `ng serve`. Au lieu de cela, nous pouvons ouvrir une autre fenêtre ou un autre onglet de terminal et exécuter les commandes supplémentaires à partir de là. Les modifications seront immédiatement visibles dans le navigateur.

Ouvrez un autre onglet de terminal et exécutez :

```
ng g c input-button-unit
```

Comme nous l'avons vu précédemment, `ng` est la commande pour utiliser l'interface de ligne de commande Angular. `g` est un raccourci pour `generate`. `c` est un raccourci pour `component`. `input-button-unit` est le nom que nous donnons au composant.

Donc la version longue de la commande est (ne l'exécutez pas) :

```
ng generate component input-button-unit
```

Voyons ce que l'interface de ligne de commande Angular a créé pour nous.

Cela a créé un nouveau dossier appelé `src/app/input-button-unit`. Il y a trois fichiers là-bas \(ou quatre si vous n'utilisez pas le modèle en ligne\):

* `input-button-unit.component.scss` - c'est là que le style spécifique au composant sera placé.
* `input-button-unit.component.spec.ts` - c'est un fichier pour tester le composant. Nous ne nous en occuperons pas dans ce tutoriel.
* `input-button-unit.component.ts` - c'est le fichier de composant où nous définirons sa logique.
* `input-button-unit.component.html` - c'est le fichier HTML.

Ouvrez le fichier `input-button-unit.component.ts`. Vous pouvez voir que l'interface de ligne de commande Angular a généré la configuration du composant pour nous, y compris son sélecteur, qui est le nom que nous avons donné précédé du préfixe `app`, et un modèle par défaut :

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})
```
{% endcode %}

> Le préfixe `app` sera ajouté au sélecteur du composant de tous les composants que vous générerez. Cela évite les conflits de noms avec d'autres composants et éléments HTML. Par exemple, si vous créez un composant nommé `input`, il ne sera pas en conflit avec l'élément `<input />` de HTML, car son sélecteur sera `app-input`.
>
> `app` est le préfixe par défaut, ce qui est bon pour votre application principale. Cependant, si vous écrivez une bibliothèque de composants à utiliser dans d'autres projets, vous devriez choisir un préfixe différent. Par exemple, la bibliothèque [Angular Material](https://material.angular.io/) utilise le préfixe `mat`. Vous pouvez créer un projet en indiquant le préfixe de votre choix en utilisant le drapeau `--prefix`, ou le modifier par la suite dans le fichier `angular.json`.

Nous pouvons utiliser ce composant tel quel et voir le résultat !

Ouvrez le fichier du composant racine, `app.component.ts` et ajoutez la balise app-input-button-unit à l'intérieur du modèle \(rappelez-vous que nous avons refactorisé le composant racine pour avoir un modèle en ligne\):

{% code title="src/app/app.component.ts" %}
```markup
template: `
  <h1>
    Welcome to {{ title }}!
  </h1>

  <app-input-button-unit></app-input-button-unit>
`,
```
{% endcode %}

Vérifiez ce qui est nouveau dans le navigateur !

Ajoutons du contenu dans notre nouveau composant. Tout d'abord, ajoutez un membre `title` que nous utiliserons comme titre de l'élément todo :

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
export class InputButtonUnitComponent {
  title = 'Learn about components';
```
{% endcode %}

Cela n'interférera pas avec le `title` du composant `app-root`, car le contenu de chaque composant est encapsulé à l'intérieur.

Ensuite ajoutez une interpolation du membre `title` dans le modèle :

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
template: `
  <p>
    input-button-unit works!
    The item title is: {{ title }}
  </p>
`,
```
{% endcode %}

Vérifiez le résultat !

Ce composant ne fait pas grand-chose pour le moment. Dans les chapitres suivants, nous allons apprendre la classe de composant, puis implémenter la logique du composant.

## 💾 Save your code to GitHub

Great job adding your first component! Let's save your work to GitHub so your code is accessible outside of your local machine. Go to [Appendix 1: Git and GitHub](../appendix-1-git-and-github.md) for instructions to publish your code.

{% hint style="info" %}
**StackBlitz Instructions** ![](../../.gitbook/assets/stackblitz-hint.svg)

We will save code within StackBlitz so you can skip the GitHub sections below. Save your work in progress by pressing **Save** in the toolbar.
{% endhint %}
