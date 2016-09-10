
import AppAuthenticationService from './authentication';
import AppProfileService from './profile';

let AppServices = angular.module('app.services', [
  AppAuthenticationService.name,
  AppProfileService.name
]);

export default AppServices;
