

/*@ngInject*/
export default class UserContext {
  constructor($rootScope, localStorageService) {
    this._$rootScope = $rootScope;
    this._localStorageService = localStorageService;
    this._defaultAuthentication = {
      isAuth: true,
      token: null,
      refresh_token: null
    };
    this.authentication = this._defaultAuthentication;
    this.userData = null;
  }

  get() {
    return this.userData;
  }

  auth() {
    return this.authentication;
  }

  setToken(token, refresh_token, rememberMe) {
    if (!token) {
      this.authentication.isAuth = false;
      this.authentication.token = undefined;
      this.authentication.refresh_token = undefined;
      this.clearInfo();
    } else {
      this.authentication.isAuth = true;
      this.authentication.token = token;
      this.authentication.refresh_token = refresh_token;
    }
    if (rememberMe) {
      this.saveLocal('auth', this.authentication);
    }
  }

  fillInfo(obj, rememberMe) {
    this.userData = angular.extend(this.userData || {}, obj);
    this._$rootScope.currentUser = this.userData;
    if (rememberMe) {
      this.saveLocal('info', this.userData);
    }
  }

  clearInfo() {
    this.userData = null;
    this._$rootScope.currentUser = null;
    this.authentication.token = null;
    this.authentication.refresh_token = null;
    this.authentication.isAuth = false;
    this.saveLocal('auth', this.authentication);
    this.saveLocal('info', this.userData);
  }

  saveLocal(key, obj) {
    this._localStorageService.set(key, obj);
  }

  loadFromLocal() {
    let authData = this._localStorageService.get('auth');
    let userData = this._localStorageService.get('info');
    authData = authData || this._defaultAuthentication;
    userData = userData || null;
    this.authentication = authData;
    this.userData = userData;
    this._$rootScope.currentUser = this.userData;
    this.setToken(authData.token, authData.refresh_token, true);
  }
}
