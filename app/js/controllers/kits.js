'use strict';

angular.module('ngTypeKit').controller('kits', ['$scope', 'ngTypeKitService', function($scope, ngTypeKitService){
    $scope.showAlert = false;
    $scope.kit = {};
    $scope.getKits = function(){
        ngTypeKitService.getKits(function(err, data){
            if(err){
                console.log("err" + err);
                $scope.errorMsg = data;
                $scope.showAlert = true;
            }
            else {
                console.log("data" + data);
                $scope.kits = data;
            }
        });
    };
    $scope.getKit = function(){
        ngTypeKitService.getKit('pcpv', function(err, data){
            if(err) console.log("err" + err);
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

        });
    };
}]);

