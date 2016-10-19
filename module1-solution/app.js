(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckCtrlFunction);

LunchCheckCtrlFunction.$inject = ['$scope'];
function LunchCheckCtrlFunction($scope){
    var dishesArray =[];
    $scope.myPlaceholder = 'list comma separated dishes you usually have for lunch';

// function to convert string to Array
    function listToArray(aList){
        return aList.split(",");
    };
    console.log(listToArray("dede,frfrf,rrf,thyyhy"));
};



})();
