'use strict';

angular.module('ngTypeKit').controller('families', ['$scope', 'ngTypeKitService', function ($scope, ngTypeKitService) {
    $scope.family = {};
    function manageError(err) {
        $scope.errorMsg = err;
        $scope.showAlert = true;
    }

    $scope.getFamily = function () {
        ngTypeKitService.getFamily($scope.family.familyId, function (err, data) {
            if (err) manageError(err);
            else $scope.family = data;
        });
    };
    $scope.getFamilyVariation = function () {
        ngTypeKitService.getFamilyVariation($scope.family.familyId, $scope.family.variationId, function (err, data) {
            if (err) manageError(err);
            else $scope.variation = data;
        });
    };
}]);

