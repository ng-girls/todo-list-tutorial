# #3: 📐 Composant

Une approche du développement Web \(et du développement logiciel en général\) est l'architecture basée sur les composants. Ces dernières années, elle a gagné beaucoup de popularité. Qu'est-ce qu'un composant ?

Dans [Service-Oriented Architecture \(SOA\) vs. Component Based Architecture](http://petritsch.co.at/download/SOA_vs_component_based.pdf), Helmut Petritsch définit un composant comme suit:

> Un composant est un objet logiciel, destiné à interagir avec d'autres composants, encapsulant certaines fonctionnalités ou un ensemble de fonctionnalités. Un composant a une interface clairement définie et se conforme à un comportement prescrit commun à tous les composants d'une architecture.

Dans une application Web, **un composant contrôle une vue**. Une vue est un bout d'écran, une partie de ce que vous verrez à l'écran. 
Un composant est contitué de trois parties : 
* un modèle (template), qui définit sa structure visuelle avec du HTML
* un contrôleur (controller), qui définit la logique (le comportement et les valeurs dynamiques) avec du code JavaScript
* un style, qui met en forme le visuel avec du CSS

Voici un diagramme d'un composant dans Angular :

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

Les directives, les pipes et les services sont d'autres blocs de construction d'Angular, qui peuvent être utilisés dans un composant \(dans le diagramme, nous ne voyons que l'utilisation d'un pipe\). Nous en discuterons plus tard dans le tutoriel.

Jetons un coup d'œil au composant créé par _Angular CLI_ qui se trouve dans le dossier `src/app`. Ouvrez le fichier `app.component.ts`.

Tout comme les ngModules que nous avons vus dans le chapitre précédent, un composant est également défini par une classe avec un décorateur. Voici la définition de la classe :

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
export class AppComponent {
  title = 'todo-list';
}
```
{% endtab %}
{% endtabs %}

Il contient une propriété "title" à laquelle vous pouvez attribuer une valeur. La valeur qui lui est déjà attribuée est le nom de votre application, la string 'todo-list'.

Angular se charge de synchroniser les propriétés du composant avec son modèle. Nous pouvons donc facilement utiliser `title` dans le modèle. Jetez un coup d'œil au modèle attaché au composant dans le fichier `app.component.html`. Vers le milieu du fichier (ligne 345 environ), vous verrez la ligne :

{% tabs %}
{% tab title="src/app/app.component.html" %}
```markup
<span>{{ title }} app is running!</span>
```
{% endtab %}
{% endtabs %}

Les doubles accolades {{}} sont appelées [**Interpolation**](https://angular.io/guide/glossary#interpolation). C'est une forme de **data binding** \(liaison de données\) dans Angular. 
Comme nous l'avons mentionné précédemment, le code de ce fichier n'est pas utilisé tel quel lorsque le navigateur rend le composant. Angular le compile en code JavaScript. À l'une des étapes de la compilation, il recherche les interpolations à l'intérieur du modèle. Le contenu de l'interpolation est une "expression de modèle Angular" \(qui ressemble beaucoup à JavaScript\). L'expression est évaluée au moment de l'exécution, puis vous voyez le résultat.

L'interpolation est l'une des fonctionnalités les plus puissantes et les plus basiques d'Angular. Elle existe depuis la première version d'Angular : AngularJS. Elle permet d'insérer très simplement des données dynamiques dans la vue.

Dans ce composant, l'expression est simplement `title` qui vient de la classe du composant. 
**Jouons avec l'interpolation** 
Essayez chacune des propositions suivantes et voyez le résultat dans le navigateur. \(À chaque changement que vous enregistrez dans le fichier, le navigateur se rafraîchit automatiquement !\)

* Supprimez les accolades et ne gardez que le contenu `title`.
* Placez les accolades et remplacez le contenu `title` par une expression mathématique : `{{ 2 + 2 }}`. \(Les espaces ne sont pas obligatoires, ils rendent simplement le code plus lisible.\)
* Écrivez une expression mathématique combinée avec `title` : `{{ title + 10 }}`
* Passez une propriété non définie à l'expression - une propriété qui n'a pas été déclarée dans la classe du composant : `{{ x }}`
* Essayez tout ce que vous voulez. Ne vous inquiétez pas - vous ne pouvez pas nuire au navigateur ou à l'ordinateur ! Dans le pire des cas, le navigateur manquera de mémoire et se bloquera. \(Mais vous devrez écrire quelque chose de vraiment compliqué pour que cela se produise !\)

C'est une façon de lier les propriétés du contrôleur du composant à son modèle. Comment Angular sait-il que c'est le modèle du composant App ?

Retournons au fichier `app.component.ts` et regardons les métadonnées du composant définies dans le décorateur `@Component` juste au-dessus de la définition de la classe :

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
```
{% endtab %}
{% endtabs %}

Nous passons un objet avec plusieurs propriétés au décorateur. 

La propriété `selector` indique à Angular quel sera le nom de la balise que nous utiliserons dans un modèle pour appeler le composant. Comme nous l'avons vu dans le fichier `src/index.html`, nous appelons le composant App à l'intérieur du corps avec cette balise :

{% tabs %}
{% tab title="src/index.html" %}
```markup
<body>
  <app-root></app-root>
</body>
```
{% endtab %}
{% endtabs %}

L'élément `app-root` n'est pas un élément HTML. C'est le composant qui a été créé avec le sélecteur `app-root`. Essayez de changer le sélecteur uniquement dans le fichier `app.component.ts`. L'élément dans le fichier `src/index.html` n'est plus remplacé par notre composant Angular. Vous pouvez voir un message d'erreur dans la console du navigateur.

La propriété `standalone` indique à Angular que le composant ne fait pas partie d'un module Angular - `NgModule`. Les modules Angular étaient obligatoires jusqu'à la version 16 d'Angular. Ils sont devenus facultatifs, et les composants peuvent être définis sans eux, d'où le terme autonome.

L'array `imports` est utilisé pour indiquer les éléments d'Angular qui sont nécessaires dans ce composant. `CommonModule` permet le flux de contrôle intégré, les directives, et plus encore. `RouterModule` est nécessaire pour définir le routage - le router-outlet \(qui est utilisé dans le modèle de base\) et les liens. Lorsque vous utilisez des modules Angular, il faut les définir ici.

La propriété `templateUrl` indique à Angular où aller chercher le fichier aui contient le modèle attaché au composant. Il y a une autre option pour donner un modèle, que nous discuterons plus tard : écrire le modèle en ligne directement dans l'object avec une autre propriété.

La propriété `styleUrl` indique à Angular où chercher le fichier de style qui définit le style du composant. SCSS est un pré-processeur pour CSS. Il fournit une syntaxe pratique pour écrire des règles CSS, et est compilé en CSS. En SCSS, vous pouvez écrire du CSS régulier avec ou sans utiliser les capacités spéciales du pré-processeur. Vous pouvez jeter un coup d'œil au fichier SCSS `app.component.scss` - vous verrez qu'il est vide. Vous pouvez ajouter un peu de style CSS :

{% tabs %}
{% tab title="src/app/app.component.scss" %}
```css
h1 {
  color: red;
}
```
{% endtab %}
{% endtabs %}

Nous ajouterons plus de style plus tard.

**Note:** _Angular CLI_ prend en charge les langages d'extension css par défaut : scss, sass et less.

Une dernière chose : les deux premières lignes du fichier ts importent du code à partir d'autres fichiers. Par exemple, `Component` définit le décorateur `@Component` \(Un décorateur est une fonction, dont l'un de ses paramètres est ce qui est écrit juste après l'avoir appelé\). Il est nécessaire d'utiliser le décorateur, qui est défini dans le fichier importé \(ou en fait, dans l'un de ses propres imports\). Essayez de supprimer cette ligne, et voyez l'erreur.


## Modèle simplifié

Nous allons remplacer le contenu du fichier `app.component.html` original par un modèle plus simple.

{% tabs %}
{% tab title="src/app/app.component.html" %}
```markup
  <h1>
    Welcome to {{ title }}!
  </h1>  
```
{% endtab %}
{% endtabs %}

## Inline Template (Optionnel)

Nous avons dit précédemment que nous pouvions écrire le modèle en ligne directement dans l'object avec une autre propriété. C'est le template inline.

Vous pouvez utiliser les templates inline dans les composants dans ce cas il faut un peu de configuration. Sachez que la suite du tutoriel est expliqué avec des modèles dans des fichiers HTML séparés.

Déplaçons le modèle pour qu'il soit **inline** dans la définition du composant. Cela nous permettra de voir le template HTML tout en regardant sa fonctionnalité. Dans le fichier `app.component.ts`, remplacez la ligne

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
templateUrl: './app.component.html',
```
{% endtab %}
{% endtabs %}

avec le contenu du fichier

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
template: `
  <h1>
    Welcome to {{ title }}!
  </h1>  
`,
```
{% endtab %}
{% endtabs %}

Notez l'usage des **backquotes** - **\`\`** - ils sont utilisés pour définir des **Template Literals**, qui existent en JavaScript depuis ES6. De cette façon, vous pouvez définir des chaînes de caractères multilignes. 
Ils ont une autre capacité intéressante : utiliser facilement des propriété et des expressions JavaScript dans la string \(sans rapport avec les expressions de liaison Angular dans le modèle\). Lisez à ce sujet dans la [documentation MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template\_literals).

Assurez-vous de remplacer `templateUrl` par `template`, et n'oubliez pas la virgule à la fin de la ligne.

Maintenant vous pouvez supprimer le fichier `app.component.html`.

Si vous voulez que _Angular CLI_ vous donne un modèle inline par défaut, exécutez la commande dans le terminal: `ng config schematics.@schematics/angular.component.inlineTemplate true`. Maintenant, chaque composant que vous générerez aura un modèle inline, et aucun fichier HTML ne sera créé.

> **Tip**: Vous pouvez spécifier que vous souhaitez utiliser un modèle inline dans tout le projet de plusieurs façons :
>
> * En générant un projet, passez le flag `-it` ou `--inline-template` comme ceci : `ng new todo-list -it`
> * Après avoir généré un projet, ajoutez-le à la configuration afin que les composants générés à partir de ce point auront un modèle inline : `ng config projects.YOURPROJECTNAME.schematics.@schematics/angular:component.inlineTemplate true`. Cela ajoute la ligne `inlineTemplate: true` dans le fichier de configuration Angular CLI `angular.json`. Vous pouvez également modifier le fichier directement.
> * Si vous n'avez pas configuré les modèles inline comme valeur par défaut, vous pouvez le spécifier par composant lorsque vous le générez, en passant le flag `-it` ou `--inline-template`. Par exemple : `ng generate header -it`.

Pour information, de la même manière que nous utilisons un modèle inline, nous pouvons également utiliser des styles inline.

## Résumé

Nous avons vu le composant racine App qui a été généré pour nous par '_Angular CLI_ lors de la création du projet, et nous l'avons même remanié. 
Dans le prochain chapitre, nous allons créer un nouveau composant nous même et donc commencer à construire l'arbre des composants, qui définit la structure de notre application.
