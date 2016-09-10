This seed was inspired by [https://github.com/AngularClass/angular2-webpack-starter](AngularClass angular2-webpack-starter) and many more repositories that i can't remember. Mostly the code convention references, Webpack, Unit test configuration setup.

Thanks to those wonderful repositories, A new Awesome AngularJS Starter has been born. (Please nvm this, just kidding) 

This seed using: AngularJS 1.5.8 with Component structure (Easy to upgrade to Angular 2), ES6 syntax, Webpack bundler, Bootstrap 4, Sass.. and many more.. Please find out by yourself. This repository is using for my learning and researching.

Feel free to fork or do anything you want.

Or make issues if you found something wrong in my code, i will correct it to make it perfect :D

Require
```
node >= 6.2.2
npm >= 3.9.5
```

How to run
```
$ npm install -g webpack webpack-dev-server
$ npm install
```

THEME
```
http://milestone.nyasha.me/latest/angular/
```

DEVELOPMENT
```
// Run dev server
$ npm run server
```

BUILD
```
// Build
// profile is: production, staging, please change profile config in config/deploy.config.js
$ npm run build:<profile>
```

DEPLOYMENT
```
// profile is: production, staging, please change profile config in config/deploy.config.js

// Build and deploy
$ npm run build:deploy:<profile>

// Deploy only
$ npm run deploy:<profile>
```

Trouble Shooting:
Running
1. Fix npm version: install npm version 3.9.5 by `$ npm install -g npm@3.9.5`
2. [$injector:unpr] Unknown provider: eProvider <- e => missing `/*ngInject*/`



Error while building:
1. ModuleNotFoundError: Module not found: Error: Can't resolve 'abc' in 'E:\...\webapp-starter-angular-bootstrap'
 - module 'abc' never be used, remove 'abc' module from entry (webpack.common.js)
