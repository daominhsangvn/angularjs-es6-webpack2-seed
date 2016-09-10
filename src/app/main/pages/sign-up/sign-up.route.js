/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('app.auth.signUp', {
      url: '/sign-up',
      template: `
        <div class="session">
          <div class="session-content">
            <div class="card card-block form-layout">
              <sign-up></sign-up>
            </div>
          </div>
          <footer class="text-xs-center p-y-1"><p><a ui-sref="app.auth.forgotPassword">Forgot password? </a>&nbsp;&nbsp;·&nbsp;&nbsp;
            <a ui-sref="app.auth.signIn">Log in instead</a></p></footer>
        </div>
      `
    });
};
