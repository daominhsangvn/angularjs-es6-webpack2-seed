
import Component from './topNav.component';
import TopNavService from './topNav.service';

let AppTopNavComponent = angular.module('app.core.components.topNav', [])
  .config(($translatePartialLoaderProvider)=> {
    'ngInject';
    $translatePartialLoaderProvider.addPart('app/core/components/topNav');
  })
  .service('TopNavService', TopNavService)
  .component('topNav', Component);

export default AppTopNavComponent;
