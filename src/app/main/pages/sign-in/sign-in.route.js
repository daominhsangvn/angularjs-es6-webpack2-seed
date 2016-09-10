/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('app.auth.signIn', {
      url: '/sign-in',
      template: `
        <div class="session">
          <div class="session-content">
            <div class="card card-block form-layout">
              <sign-in></sign-in>
            </div>
          </div>
          <footer class="text-xs-center p-y-1"><p><a ui-sref="app.auth.forgotPassword">Forgot password? </a>&nbsp;&nbsp;·&nbsp;&nbsp;
            <a ui-sref="app.auth.signUp">Create an account</a></p></footer>
        </div>
      `
    });
};
