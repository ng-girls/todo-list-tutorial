# #3: 📐 Composant

Une approche du développement Web \(et du développement logiciel en général\) est l'architecture basée sur les composants. Ces dernières années, elle a gagné beaucoup de popularité. Qu'est-ce qu'un composant ?

Dans [Service-Oriented Architecture \(SOA\) vs. Component Based Architecture](http://petritsch.co.at/download/SOA_vs_component_based.pdf), Helmut Petritsch définit un composant comme suit:

> Un composant est un objet logiciel, destiné à interagir avec d'autres composants, encapsulant certaines fonctionnalités ou un ensemble de fonctionnalités. Un composant a une interface clairement définie et se conforme à un comportement prescrit commun à tous les composants d'une architecture.

Dans une application Web, **un composant contrôle un patch d'écran appelé vue**. C'est une partie de ce que vous verrez finalement à l'écran. Il a un modèle, qui définit sa structure visuelle. Il a également une logique qui définit le comportement et les valeurs dynamiques. La partie logique est du code JavaScript et s'appelle le contrôleur.

Voici un diagramme d'un composant dans Angular, avec le résultat ci-dessous.

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

Les directives, les pipes et les services sont d'autres blocs de construction d'Angular, qui peuvent être utilisés dans un composant \(dans le diagramme, nous ne voyons que l'utilisation d'un pipe\). Nous en discuterons plus tard dans le tutoriel.

Jetons un coup d'œil au composant créé par l'Angular CLI. Tous les fichiers pertinents se trouvent dans le dossier `src/app`. Ouvrez le fichier `app.component.ts`.

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

Il contient un membre appelé "title". C'est une propriété à laquelle vous pouvez attribuer une valeur. La valeur qui lui est attribuée ici est le nom de votre application, la chaîne "todo-list".

Angular se charge de synchroniser les membres du composant avec le modèle du composant. Nous pouvons donc facilement utiliser le membre `title` dans le modèle. Jetez un coup d'œil au modèle attaché au composant dans le fichier `app.component.html`. Près du milieu du fichier \(vers la ligne 345\), vous verrez un code comme celui-ci :

{% tabs %}
{% tab title="src/app/app.component.html" %}
```markup
<span>{{ title }} app is running!</span>
```
{% endtab %}
{% endtabs %}

Les doubles accolades et leur contenu sont appelés [**Interpolation**](https://angular.io/guide/glossary#interpolation). C'est une forme de **data binding** \(liaison de données\) dans Angular. Comme nous l'avons mentionné précédemment, le code de ce fichier n'est pas utilisé tel quel lorsque le navigateur rend le composant. Angular le compile en code JavaScript. À l'une des étapes de la compilation, il recherche les interpolations à l'intérieur du modèle. Le contenu de l'interpolation est une "expression de modèle Angular" \(qui ressemble beaucoup à JavaScript\). L'expression est évaluée au moment de l'exécution, puis vous voyez le résultat.

L'interpolation est l'une des fonctionnalités les plus puissantes et les plus basiques d'Angular. Elle existe depuis le tout début d'Angular - dans la première version \(AngularJS\). Elle permet d'insérer très simplement des données dynamiques dans la vue.

Dans ce composant, l'expression est simplement le membre de la classe du composant, `title`. **Essayons de le changer.** Essayez ce qui suit et voyez le résultat dans le navigateur. \(À chaque changement que vous enregistrez dans le fichier, le navigateur se rafraîchit automatiquement !\)

* Supprimez les accolades et ne gardez que le contenu `title`.
* Placez les accolades et remplacez le contenu par une expression mathématique, par exemple : `{{ 2 + 2 }}`. \(Les espaces ne sont pas obligatoires, ils rendent simplement le code plus lisible.\)
* Écrivez une expression mathématique combinée avec le membre `title` : `{{ title + 10 }}`
* Passez une variable indéfinie à l'expression - une variable qui n'a pas été déclarée dans la classe du composant. Par exemple : `{{ x }}`
* Essayez tout ce que vous voulez. Ne vous inquiétez pas - vous ne pouvez pas nuire au navigateur ou à l'ordinateur ! Dans le pire des cas, le navigateur manquera de mémoire et se bloquera. \(Mais vous devrez écrire quelque chose de vraiment compliqué pour que cela se produise !\)

C'est une façon de lier les membres du contrôleur du composant à son modèle. Comment Angular sait-il que c'est le modèle du composant App ?

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

Nous passons un objet de définitions au décorateur. La propriété `templateUrl` indique à Angular où chercher le modèle attaché au composant. Il y a une autre option pour pointer vers le modèle, que nous discuterons plus tard : écrire tout le modèle en ligne ici, dans la définition du composant.

La propriété `styleUrl` indique à Angular où chercher le fichier de style qui définit le style de ce composant. SCSS est un pré-processeur pour CSS. Il fournit une syntaxe pratique pour écrire des règles CSS, et est compilé en CSS. En SCSS, vous pouvez écrire du CSS régulier avec ou sans utiliser les capacités spéciales du pré-processeur. Vous pouvez jeter un coup d'œil au fichier SCSS `app.component.scss` - vous verrez qu'il est vide. Vous pouvez ajouter un peu de style CSS ici, par exemple :

{% tabs %}
{% tab title="src/app/app.component.scss" %}
```css
h1 {
  color: red;
}
```
{% endtab %}
{% endtabs %}

Nous ajouterons plus de styles plus tard.

**Note:** Angular CLI prend en charge les langages d'extension css par défaut : scss, sass et less.

La première propriété, `selector`, indique à Angular quel sera le nom de la balise que nous utiliserons pour appeler le composant. Comme nous l'avons vu dans le fichier `src/index.html`, nous utilisons le composant app à l'intérieur du corps :

{% tabs %}
{% tab title="src/index.html" %}
```markup
<body>
  <app-root></app-root>
</body>
```
{% endtab %}
{% endtabs %}

L'élément `app-root` n'est pas un élément HTML. C'est le composant qui a été créé avec le sélecteur `app-root`. Essayez de changer le sélecteur. Vous verrez que si vous le changez dans un seul des fichiers, rien ne sera affiché, car l'élément n'est plus remplacé par un composant Angular. Vous pouvez voir un message d'erreur dans la console du navigateur.

La propriété `standalone` indique à Angular et à nous que le composant ne fait pas partie d'un module Angular - `NgModule`. Les modules Angular étaient obligatoires dans les versions précédentes d'Angular. Dans les versions ultérieures, ils sont devenus facultatifs, et les composants peuvent être définis sans eux, d'où le terme autonome.

L'array `imports` est utilisé pour indiquer les capacités d'Angular qui sont nécessaires dans ce composant. `CommonModule` permet le flux de contrôle intégré, les directives, et plus encore. `RouterModule` est nécessaire pour définir les capacités de routage - le point de sortie du routeur \(qui est utilisé dans le modèle de base\) et les liens. Lorsque vous utilisez des modules Angular, les imports peuvent être définis là-bas.

Une dernière chose : les deux premières lignes du fichier de composant importent du code à partir d'autres fichiers. Par exemple, `Component` définit le décorateur `@Component`. \(Un décorateur est une fonction, dont l'un de ses paramètres est ce qui est écrit juste après l'avoir appelé.\) Il est nécessaire d'utiliser le décorateur, qui est défini dans le fichier importé \(ou en fait, dans l'un de ses propres imports\). Essayez de supprimer cette ligne, et voyez l'erreur.

## Inline Template

Déplaçons le modèle pour qu'il soit **inline** dans la définition du composant. Cela nous aidera à gérer le template HTML tout en regardant sa fonctionnalité. Dans le fichier `app.component.ts`, remplacez la ligne

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
templateUrl: './app.component.html',
```
{% endtab %}
{% endtabs %}

with

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
template: ``,
```
{% endtab %}
{% endtabs %}

Notez l'usage de **backticks** - **\`\`** - ils sont utilisés pour définir des **Template Literals**, qui sont nouveaux en JavaScript \(ES6\). De cette façon, vous pouvez définir des chaînes multilignes. Ils ont une autre capacité intéressante : utiliser facilement des variables et des expressions JavaScript dans la chaîne \(sans rapport avec les expressions de liaison Angular dans le modèle\). Lisez à ce sujet dans la [documentation MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template\_literals).

Assurez-vous de remplacer `templateUrl` par `template`, et n'oubliez pas la virgule à la fin de la ligne.

Maintenant au lieu de prendre le contenu du modèle original, nous allons insérer un modèle plus simple avec lequel nous pouvons travailler. Lorsque le curseur est entre les backticks, appuyez sur Entrée et insérez le modèle HTML :

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```markup
template: `
  <h1>
    Welcome to {{ title }}!
  </h1>  
`,
```
{% endtab %}
{% endtabs %}

C'est plus facile de gérer le modèle lorsque vous voyez son contrôleur en même temps. C'est vrai tant que le modèle ne devient pas trop grand et que le contrôleur ne devient pas trop compliqué. Si c'est le cas, c'est un signe que vous devriez refactoriser votre code en le décomposant en composants enfants.

Maintenant vous pouvez supprimer le fichier `app.component.html`.

**Nous vous recommandons de continuer ce tutoriel en utilisant des templates inline dans les composants.** Surtout si vous travaillez sur un ordinateur portable avec un petit écran, où il n'y a pas assez d'espace pour ouvrir deux fichiers côte à côte.

Configurons l'Angular CLI pour qu'il nous donne un modèle inline par défaut. Dans le terminal, exécutez la commande : `ng config schematics.@schematics/angular.component.inlineTemplate true`. Maintenant, chaque composant que vous générerez aura un modèle inline, et un fichier HTML ne sera pas créé.

Si vous souhaitez continuer ce tutoriel avec des modèles dans des fichiers HTML séparés, n'exécutez pas cette commande et utilisez les fichiers `.html` générés pour les modèles.

> **Background:** You can specify that you'd like to use inline-template throughout the project in several ways:
> **Tip**: Vous pouvez spécifier que vous souhaitez utiliser un modèle inline dans tout le projet de plusieurs façons :
>
> * En générant un projet, passez le flag `-it` ou `--inline-template` comme ceci : `ng new todo-list -it`
> * Après avoir généré un projet, ajoutez-le à la configuration afin que les composants générés à partir de ce point auront un modèle inline : `ng config projects.YOURPROJECTNAME.schematics.@schematics/angular:component.inlineTemplate true`. Cela ajoute la ligne `inlineTemplate: true` dans le fichier de configuration Angular CLI `angular.json`. Vous pouvez également modifier le fichier directement.
> * Si vous n'avez pas configuré les modèles inline comme valeur par défaut, vous pouvez le spécifier par composant lorsque vous le générez, en passant le flag `-it` ou `--inline-template`. Par exemple : `ng generate header -it`.

De la même manière que nous utilisons un modèle inline, nous pouvons également utiliser des styles inline. Mais pour l'instant, nous garderons les styles dans un fichier séparé.

## Summary

We have explored the root component that was generated for us by the Angular CLI, and even refactored it. In the next chapter, we will create a new component. We will start building the tree of components, which defines the structure of the application.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_03-component)
{% endhint %}
