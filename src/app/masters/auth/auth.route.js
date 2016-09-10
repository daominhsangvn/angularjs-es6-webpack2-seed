/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('app.auth', {
      url: '/auth',
      abstract: true,
      template: '<auth-master></auth-master>'
    });
};
