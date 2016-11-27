(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', nidCtrlFunction)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems',FoundItemsDirective);
    

    // controller NarrowItDownController
    nidCtrlFunction.$inject = ['MenuSearchService'];
    function nidCtrlFunction(MenuSearchService) {
        var nidCtrl = this;
        nidCtrl.nothingFound = false;

        console.log('CONTROLLER');
        nidCtrl.getFoundItems = function () {
            //console.log('Entree dans fonction clic');
            console.log('Entree getFoundItems***');
            
            if (nidCtrl.searchWord === "" || nidCtrl.searchWord == undefined) {
                nidCtrl.nothingFound = true;
            } else {
                var promise = MenuSearchService.getMatchedMenuItems(nidCtrl.searchWord); 
                console.log('promise?: ', promise);

                // promise.then(function (response) {
                //     nidCtrl.found = response;

                //     if (response.length != 0) { // reponse non vide
                //         nidCtrl.nothingFound = false;
                //     } else { // reponse vide
                //         nidCtrl.nothingFound = true;
                //      };
                //     console.log('response: ', response); 

                // }); // then
            } // else
                 
            
        }; //getFoundItems

        nidCtrl.removeItem = function (index) {
            
            nidCtrl.found.splice(index, 1);

        };// removeItem

    }; //nidCtrlFunction


    // service MenuSearchService    
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            
                 $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json'})
                    .then(function (result) {

                        console.log("result du $http: ", result);
                    var foundItems = [];
                    // process result and only keep items that match
                    var processedItems = result.data.menu_items;
                    console.log('items.length: ', processedItems.length);
                    console.log('************');

                    var cpt = 0;
                    for (var i = 0; i < processedItems.length; i++){
                        var processedString = processedItems[i].description;
                        
                        if (processedString.indexOf(searchTerm) != -1) {
                            
                            foundItems.push(processedItems[i]);
                            console.log('foundItems[' + cpt + ']: ', foundItems[cpt].description);
                            cpt++;
                        }

                    }; // for
                    

                    // return processed items
                    return foundItems;
                        
                    }); // end of then

            
            
        }; // getMatchedMenuItems
    }; // MenuSearchService

    // directive FoundItemsDirective    
    function FoundItemsDirective() {
        var ddo = {
            restrict:'E',
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&',
                message:'@'
            },
            controller: FoundItemsListDirectiveController,
            controllerAs: 'listCtrl',
            bindToController: true,
            link: FoundItemsDirectiveLink,
            transclude:true
        };

        return ddo;
    }; //FoundItemsDirective

    // FoundItemsDirectiveLink link function    
    function FoundItemsDirectiveLink(scope,element,attrs,controller) {
        console.log("Link scope is: ", scope);
        console.log("Controller instance is: ", controller);
        console.log("Element is: ", element);

        // scope.$watch('list.cookiesInList()', function (newValue, oldValue) {
        //     console.log("Old value: ", oldValue);
        //     console.log("New value: ", newValue);
        // });        
        

    }; //FoundItemsDirectiveLink 
    
        //controller 
    function FoundItemsListDirectiveController() {
        var listCtrl = this;
       
        listCtrl.cookiesInList = function () {
        for (var i = 0; i < listCtrl.found.length; i++) {
            var name = list.found[i].name;
            if (name.toLowerCase().indexOf("cookie") !== -1) {
                return true;
            }
        }

        return false;
    };

    };

})();
