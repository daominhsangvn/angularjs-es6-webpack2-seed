import 'jqvmap/dist/jquery.vmap';
import 'jqvmap/dist/maps/jquery.vmap.world';

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
    if (this.config) {
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
    if (this.vectorMap) {
      // this.vectorMap.shutdown();
      this.vectorMap = null;
    }
  }

  refresh() {
    if (this.vectorMap) {
      // this.vectorMap.shutdown();
    }
    this.vectorMap = this._$window.$(this.container).vectorMap(this.config);
  }
}

export default Controller;
