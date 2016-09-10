/*@ngInject*/
export default class AppClassService {
  constructor($rootScope) {
    this._$rootScope = $rootScope;
    this._classes = [];
    this._previousClasses = [];
  }

  classes() {
    return this._classes;
  }

  previousClasses() {
    return this._previousClasses;
  }

  classUpdated() {
    this._$rootScope.$broadcast('AppClass.ClassUpdated');
  }

  setClasses(classes) {
    // Back up current classes for removing
    this._previousClasses = this.classes;
    // Update new classes
    this._classes = classes;
    // Trigger event
    this.classUpdated();
  }
}
