# #16: 🎁 Ajouter des éléments en utilisant le service

Améliorons notre service en ajoutant plus de fonctionnalités qui seront utilisées par nos composants. Tout d'abord - nous allons implémenter l'ajout d'un élément à la liste.

## Ajouter un élément

Ajoutons une nouvelle méthode au service, appelée `addItem`, comme ceci:

{% code title="src/app/services/todo-list.service.ts" %}
```typescript
addItem(item: TodoItem) { 
  this.todoList.push(item);
}
```
{% endcode %}

Maintenant nous pouvons changer notre composant `list-manager` pour appeler la méthode `addItem` directement depuis le service:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
addItem(title: string) {
    this.todoListService.addItem({ title });
}
```
{% endcode %}

* Notez que la méthode du service attend l'élément entier, tandis que la méthode du composant n'attend que le titre et construit l'élément. (Vous pouvez décider de laisser le service construire l'élément à partir du titre.)
* Il peut y avoir une logique supplémentaire lors de l'appel de ces méthodes, par exemple enregistrer les modifications dans une base de données (que nous implémenterons plus tard).
* Une meilleure façon de gérer les données est d'utiliser des _objets immuables_, mais c'est un sujet plus vaste que nous ne pouvons le couvrir dans ce tutoriel pour le moment.

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
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_16-add-items-using-the-service)
{% endhint %}
