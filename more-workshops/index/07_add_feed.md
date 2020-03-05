# \#6 💅Add Feed

## Add a BlogCardComponent

Create a new blog card component. Therefore right-click on the folder 📁`components` and then navigate to 'Angular Generator', select 'Component' and provide the name 'blog-card'.

Open 📝`src/app/components/blog-card.component.ts`and add the following imports

```text
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/models/post';
```

Inject the Blog Service in the constructor of `BlogCardComponent` class as shown below.

```text
constructor(private blogService: BlogService) { }
```

Add a property to hold the current blog post.

```text
blogPost: Post[] = [];
```

Now we will create a method to get the blog post and invoke it inside `ngOnInit` in 📝`src/app/components/blog-card.component.ts` file.

```text
ngOnInit() {
    this.getBlogPosts();
}

getBlogPosts() {
    this.blogService.getAllPosts().subscribe(result => {
    this.blogPost = result;
    });
}
```

Open 📝`src/app/components/blog-card.component.html` and REPLACE what is there with the HTML shown at [blog-card.component.html \(Github\)](https://github.com/ng-girls/todo-list-tutorial/blob/master/workshops/blog-editor/code/07-blog-card/blog-card.component.html)

Open `src/app/components/blog-card/blog-card.component.scss` and REPLACE what is there with the style definitions shown at [blog-card.component.scss \(Github\)](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.scss)

## Add the BlogCardComponent to the home page

We will display the blog card on home page. Open 📝`src/app/components/home.component.html` and REPLACE what is there with the following HTML.

```text
<div class="row left-panel">
    <div class="col-md-9">
        <app-blog-card></app-blog-card>
    </div>
</div>
```

Open 📝`src/app/components/home/home.component.scss` and add the following style definition inside it.

```text
.left-panel {
    margin-top: 15px;
}
```

