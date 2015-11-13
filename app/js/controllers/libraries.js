'use strict';

angular.module('ngTypeKit').controller('libraries', ['$scope', 'ngTypeKitService', function($scope, ngTypeKitService){
    $scope.library = {};
    function manageError(err){
        $scope.errorMsg = err;
        $scope.showAlert = true;
    }
    $scope.getLibrary = function(){};
    $scope.getLibraries = function(){};
}]);

