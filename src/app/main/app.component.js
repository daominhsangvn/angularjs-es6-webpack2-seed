import './app.style.scss';

let Component = {
  restrict: 'E',
  bindings: {},
  template: `
    <toaster-container></toaster-container>
    <main class="app" app-class ui-view></main>
  `
};

export default Component;
