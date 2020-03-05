# \#7 ✏️Edit Post

## Read a blog post

We will add the feature of reading a blog. Create a new blog component. Right-click on the folder 📁`components` and then navigate to 'Angular Generator', select 'Component' and provide the name ‘blog’.

Add the router link for this component in [`app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L43) as shown below

```text
{ path: 'blog/:id/:slug', component: BlogComponent },
```

Add the following method definition in [`blog.service.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L31) file.

```text
getPostbyId(postId: string) {
    const  userDetails = this.db.doc('blogs/' + postId).valueChanges();
    return  userDetails;
}
```

Open [`src/app/components/blog/blog.component.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts) and add import definitions as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts\#L2-L4](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L2-L4)

```text
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
```

Now put the code inside `BlogComponent` class as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts\#L13-L30](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L13-L30)

Open [`src/app/components/blog/blog.component.html`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.html) and replace what is there with the code shown below.

## {{postData.title}}

 {{postData.createdDate \| date:'longDate'}}

Finally we will add styling for `BlogComponent`. Open `src/app/components/blog/blog.component.scss` and replace what is there with the style definitions shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.scss](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.scss)

## Delete a blog post

We will add the feature of deleting a blog. Add the following code in the [`src/app/services/blog.service.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L41-L43).

```text
deletePost(blogID: string) {
    return  this.db.doc('blogs/' + blogID).delete();
}
```

Open [`src/app/components/blog-card/blog-card.component.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts) and add the delete method definition as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts\#L26-L34](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts#L26-L34)

```text
delete(postId) {
if (confirm('Are you sure')) {
  this.blogService.deletePost(postId).then(
    () => {
      alert("Blog deleted successfully");
    }
  );
 }
}
```

## Edit an existing blog post

We will now implement the functionality to edit an existing blog. Add the following code definition in [`blog.service.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L36-L39).

```text
updatePost(postId: string, post: Post) {
    const  putData = JSON.parse(JSON.stringify(post));
    return  this.db.doc('blogs/' + postId).update(putData);
}
```

Add the routing for edit functionality in `app.module.ts` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts\#L44](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L44)

```text
RouterModule.forRoot([
  ...
  { path: 'editpost/:id', component: BlogEditorComponent },
  ...
])
```

We will fetch the id of the blog from the URL with the help of `ActivatedRoute` class. Open [`blog-editor.component.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L26-L28) and add the following code in the constructor.

```text
if (this._route.snapshot.params['id']) {
    this.postId = this._route.snapshot.paramMap.get('id');
}
```

Update the `ngOnInit` method inside the `BlogEditorComponent` class as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts\#L31-L43](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L31-L43)

```text
ngOnInit() {
this.setEditorConfig();
if (this.postId) {
  this.formTitle = 'Edit';
  this.blogService.getPostbyId(this.postId).subscribe(
    (result: Post) => {
      if (result) {
        this.setPostFormData(result);
      }
    }
  );
 }
}
```

We will add the method to set the edit form when we click on “Edit” button on blog card in the home page. The method definition is shown below.

```text
setPostFormData(postFormData) {
    this.postData.title = postFormData.title;
    this.postData.content = postFormData.content;
}
```

Upon clicking on Save we need to handle to case of both adding a new blog as well as editing an existing blog. Hence we will update the `saveBlogPost` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts\#L68-L83](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L68-L83)

```text
saveBlogPost() {
if (this.postId) {
  this.blogService.updatePost(this.postId, this.postData).then(
    () => {
      this._router.navigate(['/']);
    }
  );
} else {
  this.postData.createdDate = this.datePipe.transform(Date.now(), 'MM-dd-yyyy HH:mm');
  this.blogService.createPost(this.postData).then(
    () => {
      this._router.navigate(['/']);
    }
  );
 }
}
```

This completes our application. We learned how to create a simple blogging application using Angular on frontend and cloud firestore as database.

