'use strict';

exampleApp.controller('kits', ['$scope', 'ngTypeKitService', function ($scope, ngTypeKitService) {
    $scope.showAlert = false;
    function manageError(err) {
        $scope.errorMsg = err;
        $scope.showAlert = true;
    }

    $scope.kit = {};
    $scope.kitFamily = {};
    $scope.getKits = function () {
        ngTypeKitService.getKits(function (err, data) {
            if (err)manageError(err);
            else $scope.kits = data;

        });
    };
    $scope.getKit = function () {
        ngTypeKitService.getKit($scope.kit.getKitId, function (err, data) {
            if (err)manageError(err);
            else $scope.kitData = data;
        });
    };
    $scope.createKit = function () {
        var options = {
            kit: {
                name: "Example",
                id: "nfx3ygt",
                analytics: false,
                domains: [],
                families: [
                    {
                        id: "gkmg",
                        name: "Droid Sans",
                        slug: "droid-sans",
                        css_names: [
                            "droid-sans-1",
                            "droid-sans-2"
                        ],
                        css_stack: "\"droid-sans-1\",\"droid-sans-2\",sans-serif",
                        variations: [
                            "n4"
                        ],
                        subset: "default"
                    }
                ]
            }
        };
        ngTypeKitService.createKit(options, function (err, data) {
            if (err)manageError(err);
            else $scope.createdKit = data;
        });
    };
    $scope.deleteKit = function () {
        ngTypeKitService.deleteKit($scope.kit.deleteKidId, function (err, data) {
            if (err)manageError(err);
            else $scope.deletedKit = data;
        });
    };
    $scope.updateKit = function () {
        ngTypeKitService.updateKit($scope.kit.updateKitId, function (err, data) {
            if (err) manageError(err);
            else $scope.updatedKit = data;
        });
    };

    $scope.getFontFamily = function () {
        ngTypeKitService.getKitFamily($scope.kitFamily.getKitId, $scope.kitFamily.getFontFamilyId, function (err, data) {
            if (err) manageError(err);
            else $scope.gettedFontFamily = data;
        });
    };
    $scope.updateOrCreateFontFamily = function () {
        var options = {
            "family": {
                "id": "gkmg",
                "name": "Droid Sans",
                "css_names": [
                    "droid-sans-1",
                    "droid-sans-2"
                ],
                "css_stack": "\"droid-sans-1\",\"droid-sans-2\",sans-serif",
                "variations": [
                    "n4"
                ],
                "subset": "default"
            }
        }
        ngTypeKitService.updateKitFamily($scope.kitFamily.updateKitId, $scope.kitFamily.updateFontFamilyId, options, function (err, data) {
            if (err) manageError(err);
            else $scope.fontFamily = data;
        });
    };
    $scope.deleteFontFamily = function () {
        ngTypeKitService.deleteKitFamily($scope.kitFamily.deleteKitId, $scope.kitFamily.deleteFontFamilyId, function (err, data) {
            if (err) manageError(err);
            else $scope.deletedFontFamily = data;
        });
    };

    $scope.publishKit = function () {
        ngTypeKitService.publishKit($scope.kit.publishKitId, function (err, data) {
            if (err)manageError(err);
            else $scope.publishKit = data;
        });
    };
    $scope.publishedKit = function () {
        ngTypeKitService.publishedKit($scope.kit.publishedKitId, function (err, data) {
            if (err)manageError(err);
            else $scope.publishedKit = data;
        });
    }
}]);

