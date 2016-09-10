import * as _ from 'lodash';

/*@ngInject*/
export default class ToggleClassDirective {
  constructor() {
    // this.template = template;
    this.restrict = 'A';
    this.scope = {
      events: '=?',
      toggleElement: '=',
      classList: '='
    };
    // this.controller = HomeController;
  }

  // optional compile function
  // compile(tElement) {
  //   return this.link.bind(this);
  // }

  // optional link function
  link(scope, element) {
    let _defaultEvent = ['click'];
    let eventsToBinding = (scope.events || _defaultEvent);
    let clicked = 0;
    let _cachedToggleElement = null;
    // Listen to click events in the component
    // We're using this method the bind dynamic events. Usually we use HostListener from angular
    _.uniqBy(eventsToBinding).forEach((evt, index) => {
      // Bind event
      element.on(evt, () => {
        if (evt === 'click') {
          clicked++; // Increase click count
        }
        // Find toggle element
        // Get from cache
        let toggleElement = _cachedToggleElement;
        if (!toggleElement) {
          // if toggle is parent
          if (scope.toggleElement === 'parent') {
            toggleElement = element[0].parentNode;
          }
          else {
            // If not found in cache, then make new selection
            // eslint-disable-next-line
            toggleElement = document.querySelector(scope.toggleElement);
          }
          // Then cache the element
          _cachedToggleElement = toggleElement;
        }

        // Make sure the toggle and classList variable exist
        if (toggleElement && scope.classList && scope.classList[index]) {
          let toggleClasses = scope.classList[index]
            .slice(0) // clone
            .splice(1); // Remove first item => -/+
          if (scope.classList[index][0] === '-' ||
            (clicked > 0 && clicked % 2 === 0) // Toggle click
          ) {
            // Remove class
            toggleClasses.forEach((value) => {
              toggleElement.classList.remove(value);
            });
          }
          else if (scope.classList[index][0] === '+' ||
            (clicked > 0 && clicked % 2 === 1) // Toggle click
          ) {
            // Add class
            toggleClasses.forEach((value) => {
              toggleElement.classList.add(value);
            });
          }
        }
      });
    });
  }
}
