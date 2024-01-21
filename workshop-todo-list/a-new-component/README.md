# #4: ✏ Un nouveau composant

Dans ce chapitre, nous allons écrire un tout nouveau composant. Il nous permettra d'ajouter un élément à la liste des tâches à effectuer. Il sera composé des éléments HTML `input` et `button`. Nous l'appellerons donc Input-Button-Unit.

Nous utiliserons _Angular CLI_ pour générer tous les fichiers et le code de démarrage dont nous avons besoin. _Angular CLI_ prend des commandes dans une fenêtre de terminal. Cela ne signifie pas que nous devons arrêter le processus `ng serve`. Au lieu de cela, nous pouvons ouvrir une autre fenêtre ou un autre onglet de terminal et exécuter les nouvelles commandes à partir de là. Les modifications seront immédiatement visibles dans le navigateur.

Ouvrez un autre onglet de terminal et exécutez :

```
ng generate component input-button-unit
```

Comme nous l'avons vu précédemment, `ng` est la commande pour utiliser _Angular CLI_. `input-button-unit` est le nom que nous voulons donner à notre composant.

Voyons ce que _Angular CLI_ a créé pour nous !

Nous avons un nouveau dossier appelé `src/app/input-button-unit`. Il y a trois fichiers dedans \(ou quatre si vous n'utilisez pas le modèle en ligne\):

* `input-button-unit.component.scss` - c'est là que le style spécifique au composant sera placé
* `input-button-unit.component.spec.ts` - c'est un fichier pour tester le composant : nous ne nous en occuperons pas dans ce tutoriel 
* `input-button-unit.component.ts` - c'est le fichier de composant où nous définirons sa logique
* `input-button-unit.component.html` - c'est le fichier du modèle

Ouvrez le fichier `input-button-unit.component.ts`. Vous pouvez voir que _Angular CLI_ a généré la configuration du composant pour nous, y compris son sélecteur, qui est le nom que nous avons donné dans la ligne de commande avec le préfixe `app` :

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

> Le préfixe `app` sera ajouté au sélecteur de tous les composants que vous générerez. Cela évite les conflits de noms avec d'autres composants et éléments HTML. Par exemple, si vous créez un composant nommé `input`, il ne sera pas en conflit avec l'élément `<input />` de HTML, car son sélecteur sera `app-input`.
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

Ajoutons du contenu dans notre nouveau composant. Tout d'abord, ajoutez une variable `title` que nous utiliserons comme titre de l'élément todo :

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
export class InputButtonUnitComponent {
  title = 'Learn about components';
```
{% endcode %}

Cela n'interférera pas avec le `title` du composant `app-root`, car le contenu de chaque composant est encapsulé à l'intérieur.

Ensuite ajoutez une interpolation de `title` dans le modèle :

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

Ce composant ne fait pas grand-chose pour le moment. 
Dans les chapitres suivants, nous allons voir la classe de composant et implémenter la logique du composant.

{% hint style="info" %}
💾 **Pusher votre code sur GitHub**

Committez tous vos changements en exécutant cette commande dans votre répertoire de projet :

```bash
git add -A && git commit -m "votre message de commit"
```

Puis pusher vos changements sur GitHub en exécutant cette commande dans votre répertoire de projet.

```
git push
```
{% endhint %}
