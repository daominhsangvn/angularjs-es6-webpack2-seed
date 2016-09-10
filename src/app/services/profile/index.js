
import ProfileService from './profile.service';

let AppProfileService = angular.module('app.core.services.profile', [])
  .service('ProfileService', ProfileService);

export default AppProfileService;
