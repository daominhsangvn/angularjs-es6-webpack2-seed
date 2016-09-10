
import ToggleClassDirective from './toggleClass.directive';

let AppToggleClassDirective = angular.module('app.core.directives.toggleClass', [])
  .directive('toggleClass', () => new ToggleClassDirective);

export default AppToggleClassDirective;
