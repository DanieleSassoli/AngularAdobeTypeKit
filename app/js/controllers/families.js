'use strict';

angular.module('ngTypeKit').controller('families', ['$scope', 'ngTypeKitService', function($scope, ngTypeKitService){
    $scope.family = {};
    function manageError(err){
        $scope.errorMsg = err;
        $scope.showAlert = true;
    }
    $scope.getFamily = function(){};
    $scope.getFamilyVariation = function(){};
}]);

