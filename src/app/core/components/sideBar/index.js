
import Component from './sideBar.component';
import SideBarService from './sideBar.service';

let AppSideBarComponent = angular.module('app.core.components.sideBar', [])
  .config(($translatePartialLoaderProvider)=> {
    'ngInject';
    $translatePartialLoaderProvider.addPart('app/core/components/sideBar');
  })
  .service('SideBarService', SideBarService)
  .component('sideBar', Component);

export default AppSideBarComponent;
