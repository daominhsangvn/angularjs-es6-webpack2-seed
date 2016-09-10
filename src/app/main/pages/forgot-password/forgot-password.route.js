/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('app.auth.forgotPassword', {
      url: '/forgot-password',
      template: `
        <div class="session">
          <div class="session-content">
            <div class="card card-block form-layout">
              <forgot-password></forgot-password>
            </div>
          </div>
          <footer class="text-xs-center p-y-1"><p><a ui-sref="app.auth.signIn">Log in </a>&nbsp;&nbsp;·&nbsp;&nbsp; <a
            ui-sref="app.auth.signUp">Create an account</a></p></footer>

        </div>
      `
    });
};
