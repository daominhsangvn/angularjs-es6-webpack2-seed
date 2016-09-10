/*@ngInject*/
export default ($stateProvider,
                $locationProvider,
                $httpProvider,
                $breadcrumbProvider,
                cfpLoadingBarProvider,
                $provide,
                $translateProvider,
                $translatePartialLoaderProvider,
                AppSettingsProvider,
                $urlRouterProvider,
                localStorageServiceProvider,
                angularPromiseButtonsProvider) => {
  // Route Configuration
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      url: '',
      template: '<app></app>',
      abstract: true
    });


  // Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;
  //Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  // Default route
  $urlRouterProvider.otherwise('/main/home');

  // Localstorage key prefix
  localStorageServiceProvider.setPrefix('123');


  ///////////////////////////////////////////////////////////
  /////////////// PROMISE BUTTONS CONFIGURATION /////////////
  //////////////////////////////////////////////////////////

  angularPromiseButtonsProvider.extendConfig({
    spinnerTpl: '<span class="btn-spinner"></span>',
    disableBtn: true,
    btnLoadingClass: 'is-loading',
    addClassToCurrentBtnOnly: false,
    disableCurrentBtnOnly: false
  });

  ///////////////////////////////////////////////////////////
  /////////////// PROMISE BUTTONS CONFIGURATION /////////////
  //////////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////////
  //////////////// DECORATE $STATE SERVICE ////////////////
  //////////////////////////////////////////////////////////

  // Custom $stateProvider method
  $provide.decorator('$state', ($delegate,
                                $rootScope) => {
    'ngInject';

    /* eslint-disable */
    $rootScope.$on('$stateChangeStart', (event, state, params, fromState, fromParams) => {
      $delegate.next = state;
      $delegate.toParams = params;
      $delegate.previous = fromState;
      $delegate.fromParams = fromParams;
      if (!fromState.name && (!angular.isDefined(state.authorization) || state.authorization) && !$rootScope.saveState) {
        $rootScope.saveState = {
          state: state,
          params: params
        };
      }
    });
    /* eslint-enable */

    return $delegate;
  });

  ///////////////////////////////////////////////////////////
  /////////////// END DECORATE $STATE SERVICE ///////////////
  //////////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////////
  ///////////////// BREADCRUMB CONFIGURATION ///////////////
  //////////////////////////////////////////////////////////

  $breadcrumbProvider.setOptions({
    prefixStateName: 'app.main.home',
    templateUrl: 'app/core/data/templates/breadcrumbs.html'
  });

  ///////////////////////////////////////////////////////////
  /////////////// END BREADCRUMB CONFIGURATION //////////////
  //////////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////////
  //////////////// LOADING BAR CONFIGURATION ///////////////
  //////////////////////////////////////////////////////////

  // Loading bar
  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.includeBar = true;

  ///////////////////////////////////////////////////////////
  ////////////// END LOADING BAR CONFIGURATION /////////////
  //////////////////////////////////////////////////////////




  ///////////////////////////////////////////////////////////
  ////////////// MULTI-LANGUAGE CONFIGURATION //////////////
  //////////////////////////////////////////////////////////

  // $translateProvider.useLoader('$translatePartialLoader', {
  //   urlTemplate: '{part}/il8n/{lang}.json'
  // });
  //
  // $translatePartialLoaderProvider.addPart('app/main');
  //
  // // make sure all values used in translate are sanitized for security
  // $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
  //
  // // cache translation files to save load on server
  // $translateProvider.useLoaderCache(true);
  //
  // // setup available languages in translate
  // var languageKeys = [],
  //   APP_LANGUAGES = [{
  //     name: 'LANGUAGES.ENGLISH',
  //     key: 'en'
  //   }];
  //
  //
  // _.each(APP_LANGUAGES, (lang) => {
  //   languageKeys.push(lang.key);
  // });
  //
  // /**
  //  *  try to detect the users language by checking the following
  //  *      navigator.language
  //  *      navigator.browserLanguage
  //  *      navigator.systemLanguage
  //  *      navigator.userLanguage
  //  */
  // $translateProvider
  //   .registerAvailableLanguageKeys(languageKeys, {
  //     'en_US': 'en',
  //     'en_UK': 'en'
  //   })
  //   .use('en');
  //
  // // Default settings
  // // set app name & logo (used in loader, sidemenu, login pages, etc)
  // AppSettingsProvider.setName('123');
  // AppSettingsProvider.setLogo('assets/img/logo.png');
  // // set current version of app (shown in footer)
  // AppSettingsProvider.setVersion('1.0.0');
  //
  // // setup available languages
  // _.each(APP_LANGUAGES, (lang) => {
  //   AppSettingsProvider.addLanguage({
  //     name: lang.name,
  //     key: lang.key
  //   });
  // });

  ///////////////////////////////////////////////////////////
  //////////// END MULTI-LANGUAGE CONFIGURATION ////////////
  //////////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////////
  ///////////////////// INTERCEPTORS ///////////////////////
  //////////////////////////////////////////////////////////

  $httpProvider.interceptors.push(($q,
                                   toaster,
                                   AppConstant,
                                   UserContext,
                                   $injector) => {
    'ngInject';

    return {
      request: (config) => {
        var authData = UserContext.auth();
        if (!config.anonymous && authData && authData.token) {
          config.headers['Authorization'] = 'Bearer ' + authData.token;
        }
        return config;
      },
      response: (response) => {
        if (response.config.message) {
          toaster.pop('success', response.config.message);
        }
        return $q.resolve(response);
      },
      responseError: (response) => {
        var inflightAuthRequest = null;
        let authData = UserContext.auth();
        if (angular.isObject(response) && response.config && (response.config.url.indexOf(AppConstant.domain) > -1)) {
          if (response.status === 400 && response.data != null) {
            return $q.reject(response);
          }
          else if (response.status === 401 && authData && authData.refresh_token) {
            var deferred = $q.defer();
            if (!inflightAuthRequest) {
              inflightAuthRequest = $injector.get('$http').post(AppConstant.domain + '/token', 'grant_type=refresh_token&refresh_token=' + authData.refresh_token, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              });
            }
            inflightAuthRequest.then((r)=> {
              inflightAuthRequest = null;
              if (r.data && r.data.access_token && r.data.refresh_token && r.data.expires_in) {
                UserContext.setToken(r.data.access_token, r.data.refresh_token, true);
                $injector.get('$http')(response.config).then((resp) => {
                  deferred.resolve(resp);
                }, ()=> {
                  deferred.reject();
                });
              } else {
                deferred.reject();
              }
            }, () => {
              inflightAuthRequest = null;
              deferred.reject();
              UserContext.clearInfo();
              $injector.get('$state').go('page.signin');
            });
            return deferred.promise;
          }
        }

        return $q.reject(response);
      }
    };
  });


  ///////////////////////////////////////////////////////////
  /////////////////// END INTERCEPTORS //////////////////////
  //////////////////////////////////////////////////////////
};
