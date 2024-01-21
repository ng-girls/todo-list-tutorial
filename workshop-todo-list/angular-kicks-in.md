# #2: 🅰 Angular entre en jeu

Avant de commencer à développer notre application, regardons le projet, sa strucuture et comment Angular entre en jeu. 
Ouvrez le dossier _todo-list_, que vous avez créé précédemment, dans votre IDE afin que nous puissions inspecter les fichiers. 
Tous les fichiers pertinents à ce stade se trouvent dans le dossier `src`.
Découvrez en plus sur les fichers générés par _Angular CLI_ dans [Appendix 4: Générer un nouveau projet](https://ng-girls.angulardevs.fr/workshop-todo-list/appendix-1-generating-a-new-project).

Ouvrez le fichier `index.html`. Tout ce que vous voyez à l'intérieur de l'élément `<body>` est le contenu qui est rendu dans la fenêtre du navigateur.
Vous pouvez voir un autre élément, qui n'est pas un tag HTML natif: `<app-root></app-root>`. Cet élément est un composant Angular, défini dans le fichier `app/app.component.ts` avec la classe nommée **AppComponent** (Nous y jetterons un coup d'œil dans le prochain chapitre).

`<app-root>` n'est donc pas un élément HTML natif mais un composant Angular. Lorsque l'application est prête, le contenu du composant est inséré à l'intérieur de la balise `<app-root>`, et vous le verrez dans le navigateur:

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption><p>initial app</p></figcaption></figure>

Les **composants** sont l'élement central des applications web modernes, dont Angular. Chaque composant peut lui-même en utiliser d'autres pour composer un ensemble plus complexe. 
Nous obtenons une **structure arborescente** des composants qui constituent notre application. Dans notre cas, le composant racine est `AppComponent` (avec le sélecteur `app-root`) utilisé dans `index.html` comme le seul composant à l'intérieur de la balise `<body>`.

> A moins d'une situation très particulière, un projet Angular n'a qu'un seul composant racine, utilisé dans le fichier `index.html`.

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
