export default class Controller {
  /*@ngInject*/
  constructor($scope, TopNavService) {
    let $this = this;
    this.topNavService = TopNavService;
    this.pageTitle = $this.topNavService.pageTitle();
    $scope.$on('TopNav.PageTitleChanged', ()=> {
      $this.pageTitle = $this.topNavService.pageTitle();
    });
  }
}
