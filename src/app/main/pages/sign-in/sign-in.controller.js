export default class Controller {
  /*@ngInject*/
  constructor(AuthenticationService, $state) {
    this._authenticationService = AuthenticationService;
    this._$state = $state;
    this.model = {
      email: '',
      password: '',
      remember: false
    };
  }

  signin(model) {
    let $this = this;
    $this.promiseButton = $this._authenticationService.login(model.email, model.password, model.remember)
      .then(() => {
        $this._$state.go('app.main.home');
      }, () => {
        $this.frm.$setPristine();
      });
  }
}
