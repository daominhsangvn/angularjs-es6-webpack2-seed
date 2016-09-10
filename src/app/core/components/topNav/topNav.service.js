/*@ngInject*/
export default class TopNavService {
  constructor($rootScope) {
    this._$rootScope = $rootScope;
    this._pageTitle = 'Sang Dao';
  }

  pageTitleChanged() {
    this._$rootScope.$broadcast('TopNav.PageTitleChanged');
  }

  pageTitle(value) {
    if (value) {
      this._pageTitle = value;
      this.pageTitleChanged();
    }
    return this._pageTitle;
  }
}
