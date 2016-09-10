
import Component from './main.component';
import routes from './main.route';

let AppMainComponent = angular.module('app.core.masters.main', [])
  .config(routes)
  .component('mainMaster', Component);

export default AppMainComponent;
