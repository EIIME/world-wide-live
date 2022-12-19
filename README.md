# World Wide Live
>Connect live from anywhere on Earth! ^_^

The webapp can be accessed from this URL: https://world-wide-live-9f9de.web.app/

## App description
The user will make an account or sign in before accessing the app. Once signed in the user can search for locations like cities, postal codes or addresses. The user will then be presented with a list of Youtube livestreams that are availible close to that location. The list includes thumbnails, titles, description and channel name. When the user clicks on a thumbnail or title they will be sent to Youtube where they can watch the stream. Searches that the user has made are stored in firebase and the top 3 searches can be viewed in the app.

## What could be done given more time (or continued upon in the future)
- Styling, responsive layout, custom logo
- Embedded Youtube player (or link to Youtube if API cost is too high)
- Present more information about the stream
- Search features like radius and autocompletion
- Filter options like views, etc...
- An interactive map with markers for the live streams
- A random location option

## Project structure and files
This is a Vite project with Vue 3 deployed with Firebase.

As for the project structure:
- `src` is where the code lives
    - `components` is where the Vue components live. These are displayed in the views folder
    - `router` is where the Vue router lives
    - `firebase` is where the firebase setup lives
    - `models` is where the models live
    - `presenters` is where the presenters live
    - `views` is where the Vue views live
- `public` is where static assets live
- `dist` is where the build output lives (private, not on github)

As for the files that contain the app:
- `src/app.vue` VueApp File, contains the app and runs code that is executed on app load 

- `src/router/index.js` VueRouter JS File, routes compoonents for single page application

- `src/components/HeaderComponent.vue` Main header and subheader
- `src/components/SearchComponent.vue` Searchfield for location, buttons and list of streams
- `src/components/SignUpComponent.vue` The form where the user signs up
- `src/components/LogInComponent.vue` The form where the user logs in
- `src/components/TopSearchComponent.vue` Top 3 most searched locations list and header

- `src/firebase/index,js` firebase setup and initialization

- `src/moodels/searchModel.js` searchModel class and methods which stores the user searches locally while running the app
- `src/models/firebaseModel.js` firebase related functions including getters and adders
 
- `src/presenters/searchPresenter.js` searchPresenter that makes calls upon functions after event triggers from SearchComponent


# Project Setup Guide
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration (optional)

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Install Dependencies

```sh
npm install
```

## Install Naive UI
```sh
npm install naive-ui
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

## Initialise Firebase (select no to overwrite, select dist as app build folder)
```sh
firebase init
```

## Deploy to Firebase
```sh
firebase deploy
```
