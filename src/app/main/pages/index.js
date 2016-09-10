

import AppNotFoundPage from './not-found';
import AppSignInPage from './sign-in';
import AppSignUpPage from './sign-up';
import AppForgotPasswordPage from './forgot-password';
import AppHomePage from './home';

let AppMainPages = angular.module('app.main.pages', [
  AppNotFoundPage.name,
  AppSignInPage.name,
  AppSignUpPage.name,
  AppForgotPasswordPage.name,
  AppHomePage.name
]);

export default AppMainPages;
