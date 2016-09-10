import $ from 'jquery';
import jQuery from 'jquery';

/* eslint-disable */
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
/* eslint-enable */

import App from './app';

export default angular.module('app', [
  App.name
]);
