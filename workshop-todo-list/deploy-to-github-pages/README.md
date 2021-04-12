# \#20: 🛰 Deploy to GitHub Pages

{% hint style="info" %}
**StackBlitz Instructions** ![](../../.gitbook/assets/stackblitz-hint.svg)

Follow the instructions on the [StackBlitz instructions](stackblitz.md) page in this chapter to rename your StackBlitz project and share the link to your app.
{% endhint %}

To deploy our changes to GitHub pages we will use the `angular-cli-ghpages` package [https://github.com/angular-schule/angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages)

* You need to install `angular-cli-ghpages`
* You need to save the changes you made in the project
* Run the deploy command

## Install `angular-cli-ghpages`

We'll use an Angular CLI command to add this library to our app and automatically configure the deploy action. Run the following command:

```text
ng add angular-cli-ghpages
```

## Commit the changes

Commit your changes made by adding `angular-cli-ghpages` by running this command in your project directory.

```text
git add -A && git commit -m "Your Message"
```

Then run the following command to push the changes 

```text
git push
```

## Deploying to GitHub Pages

Run:

```text
ng deploy --base-href="/[your-repo-name]/"
```

💡 `/[your-repo-name]/` is a placeholder for your github repository name. So if you project has the name `https://github.com/myname/ng-girls` the value has to be: `--base-href="/ng-girls/"`.

Your app will be available at [https://\[your-GH-username\].github.io/\[repo-name\]/](https://[your-GH-username].github.io/[repo-name])

For more information see [https://github.com/angular-schule/angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages).

## Known Issues

### Blank screen \(and 404 error in DevTools in Browser\)

If deploy succedeed but you see blank page in browser you probably used capitalized letters in your repository name. Try to add new repository with only lowercase letters from GitHub website. Later on remove connection to old one from your local files by typing:

```text
git remote rm
```

in terminal. Add connection to new repository

```text
git remote add origin https://github.com/{YOUR_USERNAME}/{YOUR_REPO}.git
git push -u origin main
```

And build website again:

```text
ng deploy --base-href="/[your-repo-name]/"
```

### Problem on Windows

On \(windows\) machines you might run into an issue like the following:

```text
An error occurred!
 Error: Unspecified error (run without silent option for detail)
    at C:\Users\<myuser>\AppData\Roaming\nvm\v8.9.1\node_modules\angular-cli-ghpages\node_modules\gh-pages\lib\index.js:232:19
    at _rejected (C:\Users\<myuser>\AppData\Roaming\nvm\v8.9.1\node_modules\angular-cli-ghpages\node_modules\q\q.js:844:24)
    ...
```

Try to debug it with `angular-cli-ghpages -S` . If you get the following error:

```text
fatal: could not read Username for \'https://github.com\': No error\n',
```

you can do the following

1. Create a Personal Access Token here: [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Run the following command and replace your token, organization \(your user\), repository, username and email:

   ```text
   angular-cli-ghpages --repo=https://<personal-access-token>@github.com/organization/your-repo.git --name="Displayed Username" --email=mail@example.org
   ```

