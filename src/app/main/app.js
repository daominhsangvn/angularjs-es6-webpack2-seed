

// Global modules
let AppVendors = require('../../main.vendor');

/* APP CORE */
import AppCores from './../core';

/* APP SERVICES */
import AppServices from './../services';

/* MASTER PAGES */
import AppMasterPages from './../masters';

/* APP PROVIDERS */
import AppProviders from './../providers';

/* APP PAGES */
import AppMainPages from './pages';

/* APP COMPONENT */
import AppMainComponents from './components';

import config from './app.config';
import startup from './app.startup';
import {AppConstant} from './app.constant';

import Component from './app.component';

let App =
  angular.module('app.main', AppVendors.modules.concat([
      AppProviders.name,
      AppServices.name,
      AppCores.name,
      AppMainPages.name,
      AppMainComponents.name,
      AppMasterPages.name
    ]))
    .constant('AppConstant', AppConstant)
    .config(config)
    .run(startup)
    .component('app', Component);

export default App;
