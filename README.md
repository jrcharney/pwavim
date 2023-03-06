# PWAVIM - Not Just Another Text Editor

Homework Challenge 19 - Due March 7, 2023

## Introduction

In my probably (crazy) attempt to code things the right way (STOP USING COMMON JS!), I've decided to try and combine Neovim with this code exercise.  Why do I always do these things?!

Chances are this project won't be done by deadline, especially since Github picked a good time to cryptically say my Personal Access Token expired and that I needed to redo an SSH Key. So fun times.

Oh and I got to host this thing on Heroku.  Eventually, I'd like to host it on my website, but I'll worry about that later.

## User Story

```text
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```text
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Files to look at

Needed

- `client/webpack.config.js`
  - [ ] Add and configure workbox plugins for a service worker and manifest file
  - [ ] Add CSS loaders and babel to webpack
- `client/src-sw.js`
  - [ ] Implement asset caching
- `client/src/js/install.js`
  - [ ] Add Event handler to the `beforeinstallprompt` event
  - [ ] Implement a click event handler on the `butInstall` element
  - [ ] Add a handler for the `appinstalled` event
- `client/src/js/database.js`
  - [ ] Add logic to a method that accepts some content and adds it to the database
  - [ ] Add logic for a method that gets all the content from the database

Optional

- `server/routes/htmlRoutes.js`
  - [ ] Add more routes?
- `client/index.html`
  - [ ] Upgrade `codemirror` libraries?

## TODO List

- [x] Move files out of the `Develop` folder.
  - This should allow for a `client` and `server` folder structure.
- [ ] `package.json` should have a line to launch the text editor using `npm run start`
- [ ] Bundle JavaScript files using Webpack
- [ ] Find webpack plugins that generate an HTML file, service worker, and manifest file.
- [ ] Use "next-gen Javascript" in the application. (Whatever that means.) (I'm just gonna convert the Common.js to ESM.)
- [ ] Have IndexDB create a database storage using IndexDB when the text editor is opened.
- [ ] Save "clicking off" the DOM window? (I think it means "autosave" when the window lose focus)
- [ ] Reopen the saved contents of the text editor (which were stored in IndexDB) when the text editor is reopened.
- [ ] Create an Install button that downloads the web application as an icon on the desktop
- [ ] Register a service where using Workbox when the web application loads
  - [ ] This should also pre-cache the static assets along with subsequent pages.
- [ ] Deploy application to Heroku with a proper Webpack build script.

## WishList

- [ ] Make it more "NeoVim" like. (Probably shouldn't have called it "PWAVim" when they already had "JATE" as the name. Oh well. This is a better name anyway.)
