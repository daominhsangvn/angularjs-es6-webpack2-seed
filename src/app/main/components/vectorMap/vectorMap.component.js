// https://docs.angularjs.org/guide/component

import Controller from './vectorMap.controller';

let Component = {
  restrict: 'E',
  bindings: {
    config: '<'
  },
  template: '<div style="width: 100%; height: 100%"></div>',
  controller: Controller
};

export default Component;
