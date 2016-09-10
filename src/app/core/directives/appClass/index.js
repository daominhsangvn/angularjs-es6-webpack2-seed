
import AppClassDirective from './appClass.directive';
import AppClassService from './appClass.service';

let AppAppClassDirective = angular.module('app.core.directives.appClass', [])
  .service('AppClassService', AppClassService)
  .directive('appClass', () => new AppClassDirective);

export default AppAppClassDirective;
