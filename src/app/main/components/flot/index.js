
import Component from './flot.component';
import FlotComponentService from './flot.service';

let AppMainFlotComponent = angular.module('app.main.components.flot', [])
  .service('FlotComponentService', FlotComponentService)
  .component('flot', Component);

export default AppMainFlotComponent;
