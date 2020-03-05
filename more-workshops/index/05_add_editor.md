# \#5 ✏️Add Editor

## Add Forms module

We will add the `FormsModule` in 📝`src/app/app.module.ts` as shown below.

```text
    import { FormsModule } from  '@angular/forms';

    @NgModule({
      ...    
      imports: [
        ...
        FormsModule,
      ],
    })
```

## Creating the data model

Create new a folder `src/app/models`. Create a new file 📝`src/app/models/post.ts` and paste the following code

```text
    export class Post {
        postId: string;
        title: string;
        content: string;
        createdDate: any;        
            constructor() {
            this.content = '';
        }
    }
```

## Create the blog service

We will create a service to handle our database operations. Create a new service by making a right-click on the folder 📁`services`and navigating to 'Angular Generator','Component' and provide the name ‘blog’.

Open the 📝`src/app/services/blog.service.ts` file and add the following import definitions.

```text
    import { AngularFirestore } from  '@angular/fire/firestore';
    import { Post } from  '../models/post';
    import { map } from  'rxjs/operators';
    import { Observable } from  'rxjs';
```

Inject the `AngularFirestore` in the constructor.

```text
    constructor(private db: AngularFirestore) { }
```

Now we will add the method to create a new post. The method to add a new blog post is shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts\#L14-L17](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L14-L17). Put this method in `blog.service.ts` file.

```text
    createPost(post: Post) {
      const postData = JSON.parse(JSON.stringify(post));
      return this.db.collection('blogs').add(postData);
    }
```

## Install CkEditor package

We will use [CKEditor](https://ckeditor.com/) for adding and editing our blog post. CKEditor is a Smart WYSIWYG\(What you see is what you get\) editor which provides us with great editing capabilities.

⏰We already installed into stackblitz `@ckeditor/ckeditor5-angular @ckeditor/ckeditor5-build-classic`

Imports the `CKEditorModule` in 📝`src/app/app.module.ts` as shown below.

```text
    import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

    @NgModule( {
      imports: [
        ...
        CKEditorModule,
      ],
    })
```

## Add the blog editor

We will create a new component for adding and editing the blog. Let’s make a right-click on the folder 📁`components`. Navigate to 'Angular Generator', select 'Component' and provide the name ‘blog-editor’.

### Add a route to the addpost page

Add the route for this component in 📝`app.module.ts` as shown below:

```text
    RouterModule.forRoot([
      ...
      { path: 'addpost', component: BlogEditorComponent },
      ...
    ])
```

### Add CKEditor to `BlogEditorComponent`

Open 📝`src/app/components/blog-editor/blog-editor.component.ts` and add the import definitions:

```text
    import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import { Post } from 'src/app/models/post';
    import { DatePipe } from '@angular/common';
    import { BlogService } from 'src/app/services/blog.service';
    import { Router, ActivatedRoute } from '@angular/router';
```

We will also initialize some properties as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts\#L16-L20](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L16-L20)

```text
    public Editor = ClassicEditor;
    ckeConfig: any;
    postData = new Post();
    formTitle = 'Add';
    postId = '';
```

We will create a method to define the configuration for the blog editor. You can get the method definition from [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts\#L50-L66](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L50-L66)

```text
    setEditorConfig() {
      this.ckeConfig = {
        removePlugins: ['ImageUpload', 'MediaEmbed'],
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
            { model: 'Formatted', view: 'pre', title: 'Formatted' },
          ]
        }
      };
    }
```

We will invoke this method inside `ngOnInit` as shown below.

```text
    ngOnInit() {
      this.setEditorConfig();
    }
```

### Update the BlogEditorComponent template

Open `src/app/components/blog-editor/blog-editor.component.html` and put the code as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.html](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.html)

```text
    <h1>{{formTitle}} Post</h1>
    <hr />
    <form #myForm="ngForm" (ngSubmit)="myForm.form.valid && saveBlogPost()" accept-charset="UTF-8" novalidate>
        <input type="text" class="blogHeader" placeholder="Add title..." class="form-control" name="postTitle"
            [(ngModel)]="postData.title" #postTitle="ngModel" required />
        <span class="text-danger" *ngIf="myForm.submitted && postTitle.errors?.required">
            Title is required
        </span>
        <br />
        <div class="form-group">
            <ckeditor name="myckeditor" [config]="ckeConfig" [(ngModel)]="postData.content" #myckeditor="ngModel"
                debounce="300" [editor]="Editor"></ckeditor>
        </div>
        <div class="form-group">
            <button type="submit" mat-raised-button color="primary">Save</button>
            <button type=" button" mat-raised-button color="warn" (click)="cancel()">CANCEL</button>
        </div>
    </form>
```

## Add a new blog

We will now implement the feature of adding a new blog to our application. Open 📝`src/app/components/blog-editor.component.ts` and inject the following service definitions in the constructor.

```text
    constructor(private  _route: ActivatedRoute,
      private  datePipe: DatePipe,
      private  blogService: BlogService,
      private  _router: Router) { }
```

Add the following code in `@Component` decorator `DatePipe` can be injected.

```text
    @Component({
      ...
      providers: [DatePipe]
    }
```

We will create a new method called `saveBlogPost` which is used to add a new post to our database. The definition for this method is shown below.

```text
    saveBlogPost() {
      this.postData.createdDate = this.datePipe.transform(Date.now(), 'MM-dd-yyyy HH:mm');
      this.blogService.createPost(this.postData).then(
        () => {
        this._router.navigate(['/']);
        }
      );
    }
```

This method will be invoked on click of Save button. We will add the following code definition for Cancel button.

```text
    cancel() {
        this._router.navigate(['/']);
    }
```

## Add buttons in Nav bar

We will add the navigation button to blog editor and home page in the nav bar. Add the following code inside the `<mat-toolbar>` in the file 📝`src/app/components/nav-bar/nav-bar.component.html`:

```text
<mat-toolbar class="nav-bar mat-elevation-z2">
  <button mat-button [routerLink]='[""]'> My blog </button>
  <button mat-button [routerLinkActive]='["link-active"]' [routerLink]='["/addpost"]'>
      Add Post
  </button>
</mat-toolbar>
```

### Add BlogEditorComponent styles

We will add styling for blog editor in 📝`styles.scss` file with the following code:

```text
    .ck-editor__editable {
      max-height: 350px;
      min-height: 350px;
    }
    pre {
      display: block;
      padding: 9.5px;
      margin: 0 0 10px;
      font-size: 13px;
      line-height: 1.42857143;
      color: #333;
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    blockquote {
      display: block;
      padding: 10px 20px;
      margin: 0 0 20px;
      font-size: 17.5px;
      border-left: 5px solid #eee;
    }

    img{
      max-width: 100%;
    }
```

### Test it out

Open the browser and click on “AddPost” button on the nav-bar. You will be navigated to the blog editor page. Add a new blog and click on save button to save the blog in thee database. Open the firebase console, navigate to your project overview page and click on “Database” link in the menu on the left. Here you can see the record for your newly added blog.

