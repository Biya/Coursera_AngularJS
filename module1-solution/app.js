(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckCtrlFunction);

LunchCheckCtrlFunction.$inject = ['$scope'];
function LunchCheckCtrlFunction($scope){
    $scope.myPlaceholder = 'list comma separated dishes you usually have for lunch';
    $scope.dishesList = "";
// function return the right message to show
    $scope.showMessage = function(aList){
      console.log('**** checkLength function ****')
      var dishesArray =[];
      var theMessage = "";
      //first convert list to array
      dishesArray = listToArray(aList);

      //message depends on array length
      if (dishesArray.length == 1 && dishesArray[0]==""){
          theMessage = "Please enter data first";
      } else if (dishesArray.length <=3){
          theMessage = "Enjoy!";
      } else if (dishesArray.length >=4){
          theMessage = "Too much!";
      }

      $scope.message=theMessage;

      // Uncomment to see what's happening
      // console.log('Liste: ',$scope.dishesList);
      // console.log('longueur:', listToArray($scope.dishesList).length);

    };

// function to convert string to Array
    function listToArray(aList){

        return aList.split(",");
    };

};



})();
