import * as _ from 'lodash';

/*@ngInject*/
export default class AuthenticationService {
  constructor($http, AppConstant, $q, UserContext, ProfileService) {
    this._$http = $http;
    this._appConstant = AppConstant;
    this._$q = $q;
    this._userContext = UserContext;
    this._profileService = ProfileService;
  }

  transformRequestHandler(obj) {
    let str = [];
    _.each(_.keys(obj), (p) => {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    });
    return str.join('&');
  }

  login(userName, password, isRemembered) {
    let $this = this;
    let deferred = $this._$q.defer();
    let requestPayload = {
      'username': userName,
      'password': password,
      'grant_type': 'password',
      'client_id': $this._appConstant.client_id,
      'client_secret': $this._appConstant.client_secret
    };

    let config = {
      method: 'POST',
      url: $this._appConstant.domain + '/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      transformRequest: $this.transformRequestHandler,
      data: requestPayload,
      'anonymous': true
    };

    let success = (resp)=> {
      if (resp.data) {
        // Save access token and refresh token
        $this._userContext.setToken(resp.data.access_token, resp.data.refresh_token, isRemembered);

        $this._profileService.updateData()
          .then(() => {
            deferred.resolve();
          }, () => {
            deferred.reject();
          });
      } else {
        deferred.reject();
      }
    };

    let error = (err)=> {
      deferred.reject(err);
    };

    $this._$http(config)
      .then(success, error);
    return deferred.promise;
  }

  refreshToken() {
    let $this = this;
    let deferred = $this._$q.defer();
    let requestPayload = {
      'refresh_token': $this._userContext.auth().refresh_token,
      'grant_type': 'refresh_token',
      'client_id': $this._appConstant.client_id,
      'client_secret': $this._appConstant.client_secret
    };

    var config = {
      method: 'POST',
      url: $this._appConstant.domain + '/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      transformRequest: $this.transformRequestHandler,
      data: requestPayload,
      'anonymous': true
    };

    let success = (resp) => {
      if (resp.data) {
        // Save access token and refresh token
        $this._userContext.setToken(resp.data.access_token, resp.data.refresh_token, true);

        $this._profileService.updateData()
          .then(()=> {
            deferred.resolve();
          }, ()=> {
            deferred.reject();
          });
      } else {
        deferred.reject();
      }
    };

    let error = (err)=> {
      deferred.reject(err);
    };

    $this._$http(config)
      .then(success, error);
    return deferred.promise;
  }

  logout() {
    return this._$http.post(this._appConstant.domain + '/account/logout')
      .then(()=> {
        this._userContext.clearInfo();
      }, ()=> {
        this._userContext.clearInfo();
      });
  }

  register(data) {
    return this._$http.post(this._appConstant.domain + '/account/register', data, {
      headers: {
        'Authorization': 'Basic ' + this._appConstant.basicCode
      },
      'anonymous': true
    });
  }

  forgotPassword() {

  }
}
