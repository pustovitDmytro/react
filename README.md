# react
boilerplate for making react apps

## How to Install

First of all you need to download repo to your local machine:
```sh
git clone https://github.com/pustovitDmytro/react app
cd app
```
Now you have different variants of deployment
1. The simplest variant: use `webpack-dev-server`
  ```sh
  yarn start:dev-server
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
yarn start
```
the app should run in your default browser.
anyway, you can open it via [localhost:7000](http://localhost:7000).
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
4. of course you can mix these variants

## License

MIT
