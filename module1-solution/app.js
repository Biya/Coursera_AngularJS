(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckCtrlFunction);

LunchCheckCtrlFunction.$inject = ['$scope'];
function LunchCheckCtrlFunction($scope){
    $scope.myPlaceholder = 'list comma separated dishes you usually have for lunch';

// function return the right message to show
    function showMessage(aList){
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

      return theMessage;

    };


// function to convert string to Array
    function listToArray(aList){
        return aList.split(",");
    };
     //console.log(listToArray("dede,frfrf,rrf,thyyhy"));
    //  var testString = "de,dede,de,de,de,de,de";
    //  console.log('longueur:', listToArray(testString).length);
    //  console.log(showMessage(testString));
};



})();
