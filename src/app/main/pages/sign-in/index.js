
import routes from './sign-in.route';
import Component from './sign-in.component';

let AppSignInPage =
  angular.module('app.main.pages.signIn', [])
    .config(routes)
    .component('signIn', Component);

export default AppSignInPage;
