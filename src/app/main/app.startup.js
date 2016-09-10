/*@ngInject*/
export default (UserContext, $rootScope, $location) => {

  /* eslint-disable */
  // Authentication Guard
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    let auth = UserContext.auth();
    if ((!auth || !auth.isAuth) && toState.authorization !== false ) {
      UserContext.clearInfo();
      $location.path('/auth/sign-in');
    }
  });
  /* eslint-enable */

  // Load user info from local storage
  UserContext.loadFromLocal();
};
