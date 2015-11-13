'use strict';

// Declare app level module which depends on views, and components
angular.module('ngTypeKit', []).factory('ngTypeKitService', ['$http', function ($http) {
    var baseUrl = 'http://cors.io/?u=https://typekit.com/api/v1/json/';
    var tokenParam = '?token=15a9a8fd8623e13b0e2119d88b179b20232e483e';
    function executeGetRequest(endPoint, cb) {
        $http.get(baseUrl + endPoint + tokenParam).then(function (res) {
            if (res['errors'] !== undefined) cb("error", JSON.stringify(res['errors']));
            else cb(null, res.data);
        }, function (err) {
            cb(err);
        });
    }

    function executePostRequest(endPoint, data, cb) {
        $http.post(baseUrl + endPoint + tokenParam, data).success(function (res) {
            cb(null, res.data);
        }).error(function (err) {
            cb(err);
        });
    }

    function executeDeleteRquest(endPoint, cb) {
        $http.delete(baseUrl + endPoint + tokenParam).success(function (res) {
            cb(null, res.data);
        }).error(function (err) {
            cb(err);
        });
    }

    return {
        getFamily: function (familyId, cb) {
            executeGetRequest('families/' + familyId, cb);
        },
        getFamilyVariation: function (familyId, variationId, cb) {
            executeGetRequest('families/' + familyId + '/' + variationId, cb);
        },
        getKits: function (cb) {
            executeGetRequest('kits', cb);
        },
        getKit: function (kitId, cb) {
            executeGetRequest('kits/' + kitId, cb);
        },
        createKit: function (options, cb) {
            executePostRequest('kits', options, cb);
        },
        updateKit: function (kitId, options, cb) {
            executePostRequest('kits/' + kitId, options, cb);
        },
        deleteKit: function (kitId, cb) {
            executeDeleteRquest('kits/' + kitId, cb);
        },
        getKitFamily: function (kitId, familyId, cb) {
            executeGetRequest('kits/' + kitId + '/families/' + familyId, cb);
        },
        updateKitFamily: function (kitId, familyId, options, cb) {
            executePostRequest('kits/' + kitId + '/families/' + familyId, options, cb);
        },
        deleteKitFamily: function (kitId, familyId, cb) {
            executeDeleteRquest('kits/' + kitId + '/families/' + familyId, cb);
        },
        publishKit: function (kitId, cb) {
            executePostRequest(kitId + 'publish', cb);
        },
        publishedKit: function (kitId, cb) {
            executeGetRequest(kitId + 'published', cb);
        },
        getLibraries: function (cb) {
            executeGetRequest('libraries', cb);
        },
        getLibrary: function (libraryId, cb) {
            executeGetRequest('libraries/' + libraryId, cb);
        }
    }
}]);