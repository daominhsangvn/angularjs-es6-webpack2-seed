import {default as App} from './app/main/app.module';
/* eslint-disable */
// Boostraping
var $html = angular.element(document.getElementsByTagName('html')[0]);
angular.element().ready(function () {
  $html.addClass('ng-app');
  angular.bootstrap($html, [App.name]);
});
/* eslint-enable */
