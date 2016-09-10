/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('app.main', {
      url: '/main',
      abstract: true,
      template: '<main-master></main-master>',
      resolve: {
        // Lazy load component
        components: ($q, $ocLazyLoad)=> {
          'ngInject';
          let deferred = $q.defer();

          // Lazy load child components of main layout
          // e.g: TopNav, SideBar
          require.ensure([
            './../../core/components/searchHeader',
            './../../core/components/topNav',
            './../../core/components/sideBar',
            './../../core/directives/appClass',
            './../../core/directives/toggleClass'
          ], (require) => {
            let searchHeaderModule = require('./../../core/components/searchHeader');
            let topNavModule = require('./../../core/components/topNav');
            let sideBarModule = require('./../../core/components/sideBar');
            let appClassDirectiveModule = require('./../../core/directives/appClass');
            let toggleClassDirectiveModule = require('./../../core/directives/toggleClass');
            $ocLazyLoad.load([
              {name: appClassDirectiveModule.default.name},
              {name: toggleClassDirectiveModule.default.name},
              {name: searchHeaderModule.default.name},
              {name: topNavModule.default.name},
              {name: sideBarModule.default.name}
            ]);
            deferred.resolve();
          });

          return deferred.promise;
        }
      }
    });
};
