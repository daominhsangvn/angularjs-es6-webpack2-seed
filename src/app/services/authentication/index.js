
import AuthenticationService from './authentication.service';

let AppAuthenticationService = angular.module('app.core.services.authentication', [])
  .service('AuthenticationService', AuthenticationService);

export default AppAuthenticationService;
