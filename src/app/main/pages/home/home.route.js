/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('app.main.home', {
      url: '/home',
      template: `
        <home></home>
      `
    });
};
