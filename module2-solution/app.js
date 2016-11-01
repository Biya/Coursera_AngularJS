(function(){

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController',ToBuyCtrlFunction)
    .controller('AlreadyBoughtController',BoughtCtrlFunction)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  ToBuyCtrlFunction.$inject['ShoppingListCheckOffService'];
  function ToBuyCtrlFunction(ShoppingListCheckOffService) {
    var toBuyCtrl = this;
    
    // inialize the list to display
    toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyList();
   
    toBuyCtrl.boughtButton = function () {
    }

  }

  BoughtCtrlFunction.$inject['ShoppingListCheckOffService'];
  function BoughtCtrlFunction(ShoppingListCheckOffService) {
    var boughtCtrl = this;

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

    service.getToBuyList = function () {
      console.log("Enter getToBuyList()");
      return toBuyList;

    }
    service.getBoughtList = function () {
      console.log("Enter getBoughtList");
      return boughtList;
    }
    service.boughtButton = function (toBuyList,boughtList) {
      
    }

  }
  


})();
