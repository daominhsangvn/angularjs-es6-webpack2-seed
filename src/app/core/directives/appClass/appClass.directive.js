import * as _ from 'lodash';

/*@ngInject*/
export default class AppClassDirective {
  constructor(AppClassService) {
    // this.template = template;
    this.restrict = 'A';
    this.scope = {};
    // this.controller = HomeController;

    this._appClassService = AppClassService;
  }

  // optional compile function
  // compile(tElement) {
  //   return this.link.bind(this);
  // }

  // optional link function
  link(scope, element) {
    scope.$on('AppClass.ClassUpdated', () => {
      let no = this._appClassService.classes();
      let pv = this._appClassService.previousClasses();
      // clear previous classes
      if(pv){
        _.forEach(pv, function(cl){
          element.classList.remove(cl);
        });
      }

      // Add new classes
      _.forEach(no, function(cl){
        element.classList.add(cl);
      });
    });
  }
}
