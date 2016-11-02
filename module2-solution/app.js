(function () {
  
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;
    
    // inialize the list to display
    toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyList();
   
    toBuyCtrl.boughtBtn = function (index) {
      
      ShoppingListCheckOffService.boughtBtnFunction(index);
      toBuyCtrl.allBought = ShoppingListCheckOffService.allBought;
      //console.log("toBuyCtrl.allBought: ", toBuyCtrl.allBought);      
      
    };
   
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.theService = ShoppingListCheckOffService;

    boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtList();
    
   }

  function ShoppingListCheckOffService() {

    var service = this;

    // Initialize the list of items to buy    
    var toBuyList = [{ name: "cookies", quantity: 10 },
      { name: "pineapples", quantity: 2 },
      { name: "apples", quantity: 8 },
      { name: "potatoes", quantity: 6 },
      { name: "bottle of milk", quantity: 3 }];
    
    // Initialize the list of already bought items
    var boughtList = [];

    service.allBought = false;
    service.nothingBought = true;

    service.getToBuyList = function () {
      //console.log("Enter getToBuyList()");
      return toBuyList;

    }
    service.getBoughtList = function () {
      //console.log("Enter getBoughtList()");
      return boughtList;
    }
    service.boughtBtnFunction = function (index) {

      //First add the item in boughtList
      addItem(toBuyList[index].name, toBuyList[index].quantity, boughtList);
      //Then remove the item from the toBuyList
      removeItem(index, toBuyList);
      if (toBuyList.length == 0) {
        service.allBought = true;
      };
      service.nothingBought = false;

      // console.log("service.allBought", service.allBought);
      // console.log("service.nothingBought", service.nothingBought);

    }
    // Function used to addItem in the boughList
    function addItem(itemName,quantity,aList) {
      var item = {
        name: itemName,
        quantity:quantity
      }
      aList.push(item);
      console.log("List with added item", aList);
    }

    // Function used to remove from the toBuyList
    function removeItem(index,aList) {
      aList.splice(index, 1);
      console.log("List with removed item", aList);

    }
 }
  
})();
