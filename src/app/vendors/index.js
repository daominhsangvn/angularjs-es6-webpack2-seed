let vendorModules = require('./../../main.vendor');

let AppVendors = angular.module('app.vendors', vendorModules.modules);

export default AppVendors;
