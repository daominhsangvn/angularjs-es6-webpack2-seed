
import Component from './vectorMap.component';
import VectorMapComponentService from './vectorMap.service';

let AppMainVectorMapComponent = angular.module('app.main.components.vectorMap', [])
  .service('VectorMapComponentService', VectorMapComponentService)
  .component('vectorMap', Component);

export default AppMainVectorMapComponent;
