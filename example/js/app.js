'use strict';

// Declare app level module which depends on views, and components
var exampleApp = angular.module('example', ['ngTypeKit']).config(['adobeTypeKitProvider', function(adobeTypeKitProvider){
    adobeTypeKitProvider.setApiKey('15a9a8fd8623e13b0e2119d88b179b20232e483e');
}]);

