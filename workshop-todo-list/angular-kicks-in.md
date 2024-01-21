# #2: 🅰 Angular entre en jeu

Avant de commencer à développer notre application, regardons le projet et comment Angular entre en jeu. Ouvrez le dossier _todo-list_ dans votre IDE si vous ne l'avez pas déjà fait afin que nous puissions inspecter les fichiers. Tous les fichiers pertinents à ce stade existent dans le dossier `src`.
Découvrez en plus sur les fichers générés par Angular CLI dans [Appendix 4: Generating a new project](https://ng-girls.gitbook.io/todo-list-tutorial/workshop-todo-list/appendix-1-generating-a-new-project).

Si vous êtes vraiment impatient de commencer à coder, vous pouvez sauter ce chapitre et y revenir plus tard pour comprendre la structure du projet.

Ouvrez le fichier `index.html`. Le contenu qui est rendu dans la fenêtre du navigateur est tout ce que vous voyez à l'intérieur de l'élément `<body>`. Tout ce que vous pouvez voir là maintenant est un autre élément, non-HTML: `<app-root></app-root>`. Cet élément est en fait un composant Angular, défini dans le fichier `app/app.component.ts` avec la classe nommée **AppComponent**. (Nous y jetterons un coup d'œil dans le prochain chapitre).

`<app-root>` n'est donc pas un élément HTML, c'est un composant Angular. Lorsque l'application est prête, le contenu du composant est inséré à l'intérieur de la balise `<app-root>`, et vous le verrez dans le navigateur:

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption><p>initial app</p></figcaption></figure>

Le bloc de construction principal des applications Angular est le composant Angular. Chaque composant peut utiliser d'autres composants dans son modèle. Nous avons un composant racine qui démarre toute la structure. Nous obtenons donc en fait une **structure arborescente** des composants qui construisent notre application. Dans ce cas, le composant racine est `AppComponent` (avec le sélecteur `app-root`). Nous l'avons vu utilisé dans `index.html` comme le seul composant à l'intérieur de la balise `<body>`.

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

We bootstrap our root `AppComponent` to a renderer. This way we tell Angular what component to use as the starting point of our application. And we also choose a renderer: `platformBrowserDynamic`. It knows how to take our code and add the relevant data (elements, attributes, etc.) to the browser's DOM.
Nous amorçons notre `AppComponent` racine vers un rendu. De cette façon, nous disons à Angular quel composant utiliser comme point de départ de notre application. Et nous choisissons également un rendu : `platformBrowserDynamic`. Il sait comment prendre notre code et ajouter les données pertinentes (éléments, attributs, etc.) au DOM du navigateur.

Si une erreur se produit, elle est capturée et enregistrée dans la console du navigateur (visible uniquement lorsque les outils de développement du navigateur sont ouverts).

Nous pouvons utiliser un autre rendu à ce stade, par exemple un qui rend vers les éléments natifs Android ou iOS ! Nous avons juste besoin d'un rendu qui sait comment prendre nos modèles (qui utilisent des notations HTML) et le code JavaScript, et créer des éléments d'application mobile natifs. Un exemple de ce type de rendu est [NativeScript](https://www.nativescript.org/) de Telerik.

Il existe même des rendus vers Arduino, avec lesquels vous pouvez connecter des capteurs, des boutons, des LED et d'autres matériels à votre application ! Vous pouvez voir un excellent exemple ici : [Building Simon with Angular2-IoT](https://medium.com/@urish/building-simon-with-angular2-iot-fceb78bb18e5).

Nous avons vu comment nous disons à Angular où et comment commencer son travail, comment nous déclarons le composant racine, et comment nous l'utilisons.

Dans le prochain chapitre, nous verrons comment un composant est défini dans Angular.
