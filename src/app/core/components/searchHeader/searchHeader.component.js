// import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {SearchHeaderService} from './searchHeader.service';
// import {ToggleClassDirective} from "../../directives/toggleClass/toggleClass.directive";

import template from './searchHeader.template.html';
import Controller from './searchHeader.controller';

let Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller: Controller
};

export default Component;
