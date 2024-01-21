# #2: 🅰 Angular entre en jeu

Avant de commencer à développer notre application, regardons le projet et comment Angular entre en jeu. Ouvrez le dossier _todo-list_ dans votre IDE si vous ne l'avez pas déjà fait afin que nous puissions inspecter les fichiers. Tous les fichiers pertinents à ce stade existent dans le dossier `src`.
Découvrez en plus sur les fichers générés par Angular CLI dans [Appendix 4: Generating a new project](https://ng-girls.gitbook.io/todo-list-tutorial/workshop-todo-list/appendix-1-generating-a-new-project).

Si vous êtes vraiment impatient de commencer à coder, vous pouvez sauter ce chapitre et y revenir plus tard pour comprendre la structure du projet.

Ouvrez le fichier `index.html`. Le contenu qui est rendu dans la fenêtre du navigateur est tout ce que vous voyez à l'intérieur de l'élément `<body>`. Tout ce que vous pouvez voir là maintenant est un autre élément, qui n'est pas un tag HTML natif: `<app-root></app-root>`. Cet élément est en fait un composant Angular, défini dans le fichier `app/app.component.ts` avec la classe nommée **AppComponent**. (Nous y jetterons un coup d'œil dans le prochain chapitre).

`<app-root>` n'est donc pas un élément HTML natif, c'est un composant Angular. Lorsque l'application est prête, le contenu du composant est inséré à l'intérieur de la balise `<app-root>`, et vous le verrez dans le navigateur:

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption><p>initial app</p></figcaption></figure>

Les composants sont l'élement central des applications web modernes, dont Angular. Chaque composant peut lui-même en utiliser d'autres pour composer un ensemble plus complexe. Nous avons un composant racine `app-root`. Nous obtenons donc en fait une **structure arborescente** des composants qui constituent notre application. Dans ce cas, le composant racine est `AppComponent` (avec le sélecteur `app-root`). Nous l'avons vu utilisé dans `index.html` comme le seul composant à l'intérieur de la balise `<body>`.

> A moins de situations très particulières, vous n'avez qu'un seul composant racine dans votre application, utilisé dans le fichier `index.html`.

Comment Angular sait-il que `AppComponent` est le composant racine? C'est défini dans le fichier `main.ts` dans les dernières lignes:

{% tabs %}
{% tab title="src/main.ts" %}
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```
{% endtab %}
{% endtabs %}

De cette façon, nous disons à Angular quel composant utiliser comme point de départ de notre application.

Dans le prochain chapitre, nous verrons comment un composant est défini dans Angular.
