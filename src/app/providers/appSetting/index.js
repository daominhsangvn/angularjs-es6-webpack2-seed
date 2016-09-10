import AppSettingsProvider from './appSetting.provider';

let AppAppSettingsProvider = angular.module('app.core.providers.appSetting', [])
  .provider('AppSettings', AppSettingsProvider);

export default AppAppSettingsProvider;
