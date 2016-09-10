/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('app.common', {
      url: '/common',
      abstract: true,
      template: '<common-master></common-master>'
    });
};
