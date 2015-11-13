'use strict';

angular.module('ngTypeKit').controller('kits', ['$scope', 'ngTypeKitService', function($scope, ngTypeKitService){
    $scope.showAlert = false;
    function manageError(err){
        $scope.errorMsg = err;
        $scope.showAlert = true;
    }
    $scope.kit = {};
    $scope.getKits = function(){
        ngTypeKitService.getKits(function(err, data){
            if(err)manageError(err);
            else $scope.kits = data;

        });
    };
    $scope.getKit = function(){
        ngTypeKitService.getKit('pcpv', function(err, data){
            if(err)manageError(err);
            else console.log("data" + data);
            $scope.kits = data;
        });
    };
    $scope.createKit = function(){
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
        ngTypeKitService.createKit(options, function(err, data){
            if(err)manageError(err);
            else $scope.createdKit = data;
        });
    };
    $scope.deleteKit = function(){
        ngTypeKitService.deleteKit($scope.kit.deleteKidId, function(err, data){
            if(err)manageError(err);
            else $scope.deletedKit = data;
        });
    };
    $scope.updateKit = function(){
        ngTypeKitService.updateKit($scope.kit.updateKitId, function(err,data){
            if (err) manageError(err);
            else $scope.deletedKit = data;
        });
    };

    $scope.getFontFamily = function(){

    };
    $scope.updateFontFamily = function(){

    };
    $scope.deleteFontFamily = function(){};

    $scope.publishKit = function(){};
    $scope.publishedKit = function(){}
}]);

