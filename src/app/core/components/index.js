
import AppConfigurationComponent from './configuration';
import AppSearchHeaderComponent from './searchHeader';
import AppSideBarComponent from './sideBar';
import AppTopNavComponent from './topNav';

let AppComponents = angular.module('app.core.components', [
  AppConfigurationComponent.name,
  AppSearchHeaderComponent.name,
  AppSideBarComponent.name,
  AppTopNavComponent.name
]);

export default AppComponents;
