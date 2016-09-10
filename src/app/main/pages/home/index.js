
import routes from './home.route';
import Component from './home.component';

let AppHomePage =
  angular.module('app.main.pages.home', [])
    .config(routes)
    .component('home', Component);

export default AppHomePage;
