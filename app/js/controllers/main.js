'use strict';

angular.module('ngTypeKit').controller('main', ['$scope', 'mainService', function($scope, mainService){
    $scope.getKits = function(){
        mainService.getKit('pcpv', function(err, data){
            if(err) console.log("err" + err);
            else console.log("data" + data);
            $scope.kits = data;
        })
    }
}]);

