
import routes from './sign-up.route';
import Component from './sign-up.component';

let AppSignUpPage =
  angular.module('app.main.pages.signUp', [])
    .config(routes)
    .component('signUp', Component);

export default AppSignUpPage;
