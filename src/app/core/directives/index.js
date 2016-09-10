
import AppAppClassDirective from './appClass';
import AppToggleClassDirective from './toggleClass';

let AppDirectives = angular.module('app.core.directives', [
  AppAppClassDirective.name,
  AppToggleClassDirective.name
]);

export default AppDirectives;
