
import Component from './auth.component';
import routes from './auth.route';

let AppAuthComponent = angular.module('app.core.masters.auth', [])
  .config(routes)
  .component('authMaster', Component);

export default AppAuthComponent;
