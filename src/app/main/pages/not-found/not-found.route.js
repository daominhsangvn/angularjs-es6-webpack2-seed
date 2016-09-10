/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('app.common.notFound', {
      url: '/404',
      template: `
      <div class="session bg-success">
        <div class="session-content text-xs-center">
          <div>
            <div class="error-number">
              <strong>404</strong>
            </div>
            <div class="m-x-1 m-y-1">
              <h6 class="text-uppercase">
                <strong>Page not found!</strong>
              </h6>
              <p>Sorry, but the page you were trying to view does not exist.</p>
            </div>
            <a href="/" class="btn btn-secondary btn-sm b-a-0">Return to homepage</a>
          </div>
        </div>
      </div>
      `
    });
};
