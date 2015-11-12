'use strict';

angular.module('ngTypeKit').factory('mainService', ['$http', function ($http) {
    var baseUrl = 'https://typekit.com/api/v1/json/';

    function executeRequest(endPoint, cb) {
        var params = {
            headers: {
                'X-Typekit-Token': '15a9a8fd8623e13b0e2119d88b179b20232e483e'
            }
        };
        $http.jsonp(baseUrl + endPoint + '?callback=JSON_CALLBACK', params).success(function (data) {
            cb(null, data);
        }).error(function (err) {
            cb(err);
        });
    }

    return {
        getFamily: function (familyId, cb){
            executeRequest('families/' + familyId, cb);
        },
        getFamilyVariation: function (familyId, variationId, cb){
            executeRequest('families/' + familyId + '/' + variationId, cb);
        },
        getKits: function (cb){
            executeRequest('kits', cb);
        },
        getKit: function (kitId, cb){
            executeRequest('kits/' + kitId, cb);
        },
        getKitFamily: function (kitId, familyId, cb){
            executeRequest('kits/' + kitId + 'families/' + familyId, cb);
        },
        publishKit: function(kitId, cb){
            executeRequest(kitId + 'publish', cb);
        },
        publishedKit: function(kitId, cb){
            executeRequest(kitId + 'published', cb);
        },
        fontLibraries: function(cb){
            executeRequest('libraries', cb);
        },
        fontLibrary: function(libraryId, cb){
            executeRequest('libraries/' + libraryId, cb);
        }
    }
}]);