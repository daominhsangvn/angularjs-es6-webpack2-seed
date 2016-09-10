
import AppUserContext from './user';

let AppContext = angular.module('app.core.context', [
  AppUserContext.name
]);

export default AppContext;
