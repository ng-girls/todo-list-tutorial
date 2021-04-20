---
description: 'Here you''ll find several options to deploy your app, including instructions.'
---

# Appendix 2: 🛰 Deploying your app

## What is deploying?

When you create a project on your computer, you can run and view it only on a browser on the same computer. Eventually, web applications exist on the Web. How do they get there?

One option is that you make sure your computer is always on and connected to the internet, and set up a configuration that allows other computer to access only the files of the web application using your computer's IP address. Then your computer will practically become a **server**.

You don't want to do this. For many reasons. Here are some of them:

* You don't want to have your computer always on.
* You'll have to manage security to avoid attacks on your computer.
* You'll have to manage possible overflow of requests to view your web app. 

Some organizations manage their own servers. However, there's a much more simple and reliable option: **The Cloud.**

Several companies have gained so much expertise in managing servers, that they now offer to manage servers for others. You don't need to think about the physical computer that holds your data and files. You don't need to worry about secure connections. You don't need to know what software and which version is installed on these computers. You get a service where you can send \(upload\) the files and configure how to serve them to the users. 

You can do much more on Clouds, like setting up functions that run on the server-side instead of the app \(for security and performance reasons\), saving and managing data in data bases and files in storage, using services such as automated notifications, emails, and even Artificial Intelligence and Machine Learning. 

For your web app we'll focus on making it available online. You may find additional related services and instructions in the specific product page, such as setting up your own, custom domain, connecting to a database, and managing users. 

## Available deployment services

The services listed below allow a simple process for deployment. All of them offer hosting of the web app with global distribution, scalable access, security, and the option to use a custom domain. Additional services that come out of the box are listed.

Please note that this is not a complete list. _Contribution of instructions to additional services to this tutorial is welcome! \(Please submit a pull request.\)_

* [Azure Static Web Apps by Microsoft](deploying-with-azure-static-web-apps.md)
  * Simple authentication with five major providers
  * Authorization
  * Serverless functions \(API\)
* [GitHub Pages](deploy-to-github-pages/)
  * Only GitHub account needed
* Netlify
* Firebase by Google

