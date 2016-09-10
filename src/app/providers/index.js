import AppAppSettingsProvider from './appSetting';

let AppProviders = angular.module('app.providers', [
  AppAppSettingsProvider.name
]);

export default AppProviders;

