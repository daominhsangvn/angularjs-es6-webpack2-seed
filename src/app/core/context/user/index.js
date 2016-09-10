
import UserContext from './user.context';

let AppUserContext = angular.module('app.core.context.user', [])
  .service('UserContext', UserContext);

export default AppUserContext;
