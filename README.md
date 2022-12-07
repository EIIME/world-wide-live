# World Wide Live
>Connect live from anywhere on Earth!

Hosting URL: https://world-wide-live-9f9de.web.app/

This webapp helps users locate live video stream from Youtube based on location. The user can prompt a location, address or postal code and then is presented with active live video streams in a selected radius around that location. The stream is viewed in an embedded Youtube window. 

## What has been done so far
The user can search for a location and is presented with a list of live streams. The list includes titles and links to the youtube streams.

## What is left to do
- Styling, responsive layout, logo
- Embedded Youtube player (or link to Youtube if API cost is too high)
- Present more information about the stream
- Search features like radius and autocompletion

## Goals if there is time left
- Filter options like views, etc...
- An interactive map with markers for the live streams
- A random location option

## Project structure and files
This is a Vite project with Vue 3 deployed with Firebase. A CSS Framework is yet to be decided.

As for the project structure:
- `src` is where the code lives
    - `components` is where the Vue components live
    - `router` is where the Vue router lives
    - `views` is where the Vue views live
- `public` is where static assets live
- `dist` is where the build output lives (private, not on github)

As for the files that contain the app:
- `src/router/index.js` VueRouter JS File, routes compoonents for single page application

- `src/components/HeaderComponent.vue` Main header and subheader
- `src/components/SearchComponent.vue` Searchfield for location, submit button and list of streams

- `src/searchResults.js` JS code containing API calls for search results and construction of links


# Project Setup Guide
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## ~~Customize configuration~~

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Install Dependencies

```sh
npm install
```

## Compile and Hot-Reload for Development

```sh
npm run dev
```

The app can now be run locally.

## Compile and Minify for Production

```sh
npm run build
```

## Lint with [ESLint](https://eslint.org/) (optional)

```sh
npm run lint
```

## Install Firebase
```sh
npm install -g firebase-tools
```

## Login to Firebase 
```sh
firebase login
```

## Initialise Firebase (select no to overwrite)
```sh
firebase init
```

## Deploy to Firebase
```sh
firebase deploy
```
