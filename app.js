(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCaculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.affichage=[];

  $scope.displayNumeric = function () {
    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };

  $scope.sauver = function(){
    console.log("**** Entree dans sauver()");
    console.log("tableau affichage:",$scope.affichage );
  };

  

  function calculatNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

  $scope.genererTabIndice = function(nbre) {
    $scope.affichage = [];
    var bufferTab = [];
    for (var index = 0; index < nbre*7; index++) {
      bufferTab.push(index);
    };
    $scope.tabIndice = bufferTab;
    console.log("tableau tabIndice: ", $scope.tabIndice);
  };
  // console.log($scope.genererTabIndice(2));
  $scope.tabJours = ['lun','mar','mer','jeu','ven','sam','dim'];
  //$scope.affichage = [];

});


})();
