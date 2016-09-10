
import AppAuthComponent from './auth';
import AppCommonComponent from './common';
import AppMainComponent from './main';

let AppMasterPages = angular.module('app.masters', [
  AppAuthComponent.name,
  AppCommonComponent.name,
  AppMainComponent.name
]);

export default AppMasterPages;
