import Component from './configuration.component';
import ConfigurationService from './configuration.service';

let AppConfigurationComponent = angular.module('app.core.components.configuration', [])
  .config(($translatePartialLoaderProvider)=> {
    'ngInject';
    $translatePartialLoaderProvider.addPart('app/core/components/configuration');
  })
  .service('ConfigurationService', ConfigurationService)
  .component('configuration', Component);

export default AppConfigurationComponent;
