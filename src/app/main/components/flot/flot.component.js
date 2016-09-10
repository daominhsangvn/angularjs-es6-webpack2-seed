// https://docs.angularjs.org/guide/component

import Controller from './flot.controller';

let Component = {
  restrict: 'E',
  bindings: {
    data: '<', // 1 way
    config: '<'
  },
  template: '<div style="width: 100%; height: 100%"></div>',
  controller: Controller
};

export default Component;
