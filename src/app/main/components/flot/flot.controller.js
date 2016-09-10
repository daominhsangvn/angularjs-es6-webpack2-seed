import 'flot';
import './plugins/jquery.flot.spline/jquery.flot.spline';

class Controller {
  /*@ngInject*/
  constructor($element, $window) {
    // #1
    this._$element = $element;
    this._$window = $window;
    this.initFlag = false;
  }

  $onInit() {
    // #3
    this.container = this._$element[0].children[0];
    this.parent = this._$element;
    this.initFlag = true;
    if (this.data && this.config) {
      this.refresh();
    }
  }

  $onChanges() {
    // #2
    if (this.initFlag) {
      this.refresh();
    }
  }

  $onDestroy() {
    if (this.flot) {
      this.flot.shutdown();
      this.flot = null;
    }
  }

  refresh() {
    if (this.flot) {
      this.flot.shutdown();
    }
    this.flot = this._$window.$.plot(this._$window.$(this.container), this.data, this.config);
  }
}

export default Controller;
