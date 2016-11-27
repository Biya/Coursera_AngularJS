(function () {
    
    'use strict';
    
    angular.module('MenuApp')
        .controller('ItemsListController', ItemsListController);
    
    ItemsListController.$inject = ['allItems','$stateParams'];
    function ItemsListController(allItems, $stateParams) {
        console.log(" *** Welcome to ItemsListController");
        var itemsCtrl = this;
        itemsCtrl.allItems = allItems;
        itemsCtrl.categoryClicked = $stateParams.categoryName;
        console.log("itemsCtrl.allItems: ", itemsCtrl.allItems);
        console.log('$stateParams.categoryName: ', $stateParams.categoryName);

    }


})();