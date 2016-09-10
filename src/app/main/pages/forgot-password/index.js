
import routes from './forgot-password.route';
import Component from './forgot-password.component';

let AppForgotPasswordPage =
  angular.module('app.main.pages.forgotPassword', [])
    .config(routes)
    .component('forgotPassword', Component);

export default AppForgotPasswordPage;
