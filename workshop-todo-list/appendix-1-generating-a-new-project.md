# Appendix 4: Generating a new project
# Appendice 4: Générer un nouveau projet

Dans chaque projet, il existe différentes façons de commencer, la plupart d'entre elles concernent les outils d'échafaudage comme Yeoman ou Slush. Ces outils génèrent un projet de démarrage, vous aident à générer les fichiers nécessaires, et prennent soin de construire et d'exécuter le projet.
Other ways to start are using starter kits, are also called seed projects, which contain all you need to start the project.  
Une alternative est d'utiliser des kits de démarrage, également appelés projets de démarrage, qui contiennent tout ce dont vous avez besoin pour démarrer le projet.
Unlike scaffolding tools, starter kits are relevant only for the initial project. After installation you probably won't use that kit again \(if it's a good starter kit maybe you'll go back to read the documentation\).
Contrairement aux outils d'échafaudage, les kits de démarrage ne sont pertinents que pour le projet initial. Après l'installation, vous n'utiliserez probablement plus ce kit \(si c'est un bon kit de démarrage, vous reviendrez peut-être lire la documentation\).

Concernant Angular, la façon la plus simple de commencer est le CLI Angular qui est un outil d'échafaudage. Nous couvrirons son utilisation dans ce tutoriel.

Dans ce chapitre, nous montrons tous les fichiers et dossiers qui sont créés par l'interface de ligne de commande Angular lorsque vous créez un nouveau projet. Nous commencerons par une action importante : changer le préfixe de l'application.

## Préfixe de l'application

Le préfixe est utilisé pour différencier les composants que vous créez dans votre application des composants que vous utilisez à partir d'autres sources, et des composants HTML. Vous pouvez donner vos initiales comme préfixe s'il s'agit d'un projet personnel. Si vous collaborez ou travaillez pour un client, vous pouvez avoir les initiales du nom du projet comme préfixe. Dans ce tutoriel, le préfixe sera simplement `todo`.

Angular CLI génère un fichier de configuration pour son propre usage : `angular.json`. Ouvrez ce fichier, trouvez la propriété `prefix` et changez sa valeur de `app` à `todo`. Désormais, chaque composant et directive que vous créerez à l'aide d'Angular-CLI aura ce préfixe dans son sélecteur.

{% hint style="info" %}
Quand vous changez votre préfixe, vous devez le garder à l'esprit pour le reste du tutoriel !
{% endhint %}

Nous aurions pu définir le préfixe lorsque nous avons créé le projet, en ajoutant `--prefix <prefix>`. Alors même le composant racine qui est généré aurait ce préfixe. Mais nous sommes bien avec son sélecteur actuel, `app-root`, et nous ne le changerons pas pour le moment.

## Structure de l'application

La première chose à faire lorsque vous travaillez avec l'interface de ligne de commande est de créer le projet initial.
Pour le faire, vous pouvez simplement créer un dossier et écrire `ng new <project-name>`.

after we created the project we will get file in this format

```text
├── angular.json // Angular CLI configuration
├── e2e // end to end testing
├── karma.conf.js // testing configuration file
├── package.json // package configuration file
├── protractor.conf.js // testing configuration file
├── README.md // your readme
├── src // your code in here
│   ├── app
│   │   ├── app.component.scss
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── index.ts
│   ├── assets // pictures etc
│   ├── environments // environments variables
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico // the browser icon
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.json // typescript configuration
│   └── typings.d.ts
└── tslint.json // linting configuration
```

Mettons de côté tous les fichiers de configuration pour le moment et passons directement à la structure des dossiers.
Le dossier app est le composant principal de l'application à partir duquel nous démarrons notre application.
Nous parlerons plus en détail des composants dans le tutoriel suivant, mais l'idée principale du projet est que nous créons des composants et les connectons les uns aux autres jusqu'à ce que nous ayons une application.

Avec Angular CLI nous pouvons générer des composants et d'autres fichiers qui peuvent nous aider dans le futur. Pour ce faire, nous devons écrire `ng generate component <component name>` pour les composants et `ng generate route <route path>` pour les routes et bien d'autres qui peuvent être examinés dans [angular cli docs](

Maintenant, vous vous demandez probablement comment voir et réviser votre application ?
Votre commande pour cela serait `ng serve` et vous pourrez accéder à votre application dans `http://localhost:4200`
Pour finir, si vous voulez construire votre application pour la production, vous devez écrire `ng build` et vous y êtes, une façon facile d'échafauder votre application Angular

