
import Component from './common.component';
import routes from './common.route';

let AppCommonComponent = angular.module('app.core.masters.common', [])
  .config(routes)
  .component('commonMaster', Component);

export default AppCommonComponent;
