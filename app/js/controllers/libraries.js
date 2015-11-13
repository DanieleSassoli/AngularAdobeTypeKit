'use strict';

angular.module('ngTypeKit').controller('libraries', ['$scope', 'ngTypeKitService', function ($scope, ngTypeKitService) {
    $scope.library = {};
    function manageError(err) {
        $scope.errorMsg = err;
        $scope.showAlert = true;
    }

    $scope.getLibrary = function () {
        ngTypeKitService.getLibrary($scope.library.libraryId, function (err, data) {
            if (err) manageError(err);
            else $scope.libraryData = data;
        });
    };
    $scope.getLibraries = function () {
        ngTypeKitService.getLibraries(function (err, data) {
            if (err) manageError(err);
            else $scope.libraries = data;
        });
    };
}]);

