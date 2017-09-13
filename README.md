# react
boilerplate for making gracefull react apps


## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#how-to-install)
3. [Running the Project](#running-the-project)
4. [Project Structure](#project-structure)
5. [Deployment](#deployment)

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## How to Install

First of all you need to download repo to your local machine:
```sh
$ git clone https://github.com/pustovitDmytro/react <my-project-name>
$ cd <my-project-name>
```
This will create your own project based on [`react-boilerplate`](https://github.com/pustovitDmytro/react).

After, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/), but `npm install` will also suffice.
  ```sh
  $ yarn install
  ```
## Running the Project

Now you have different variants how to launch new app:
1. The simplest variant: use `webpack-dev-server`
  ```sh
  $ yarn start:dev-server
  ```
  after that open [localhost:5000](http://localhost:5000).
  
  In case you need specify own port you can do it in `webpack/devserver.js`:
  ```javascript
  devServer: {
        compress: true,
        port: 5000,
        hot: true,
        https: false
      }
  ```
2. static http-server
```sh
$ yarn start
```
the app should run in your default browser.

Anyway, you can open it via [localhost:7000](http://localhost:7000).

To change default port you have to look into `package.json`:
```javascript
    "start": "npm run build && npm run start:http-server",
    "start:http-server": "http-server build -p 7000 -o",
```
3. Assembling without launching server:
```sh
yarn build
```
or in development mode:
```sh
yarn assemble
```
with watch:
```sh
yarn start:watch
```
4. Of course you can mix these variants

## Project Structure
```
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── normalize.js         # Browser normalization and polyfills
│   ├── components           # Global Reusable Components
│   ├── containers           # Global Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── PageLayout       # Global application layout in which to render routes
│   ├── routes               # Main route definitions and async split points
│   │   ├── index.js         # Bootstrap main application routes with store
│   │   ├── Home             # Fractal route
│   │   │   ├── index.js     # Route definitions and async split points
│   │   │   ├── assets       # Assets required to render components
│   │   │   ├── components   # Presentational React Components
│   │   │   └── routes **    # Fractal sub-routes (** optional)
│   │   └── Counter          # Fractal route
│   │       ├── index.js     # Counter route definition
│   │       ├── container    # Connect components to actions and store
│   │       ├── modules      # Collections of reducers/constants/actions
│   │       └── routes **    # Fractal sub-routes (** optional)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```

## Related Projects

There are some  more boilerplates that I'm working on:
1. [gulp](https://github.com/pustovitDmytro/gulp) - simple template for quick site creation via gulp
2. [web-extension](https://github.com/pustovitDmytro/web-extension) - boilerplate to making web-extensions (firefox and chrome simultaneously)
3. [parser](https://github.com/pustovitDmytro/parser) - tiny universal Python-based asynchronous sites scrapper

## License

MIT
