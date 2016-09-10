

import AppMainFlotComponent from './flot';
import AppMainVectorMapComponent from './vectorMap';

let AppMainComponents = angular.module('app.main.components', [
  AppMainFlotComponent.name,
  AppMainVectorMapComponent.name
]);

export default AppMainComponents;
