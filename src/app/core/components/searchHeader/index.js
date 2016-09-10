
import Component from './searchHeader.component';
import SearchHeaderService from './searchHeader.service';

let AppSearchHeaderComponent = angular.module('app.core.components.searchHeader', [])
  .config(($translatePartialLoaderProvider)=> {
    'ngInject';
    $translatePartialLoaderProvider.addPart('app/core/components/searchHeader');
  })
  .service('SearchHeaderService', SearchHeaderService)
  .component('searchHeader', Component);

export default AppSearchHeaderComponent;
