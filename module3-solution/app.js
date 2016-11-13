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
                console.log('promise: ', promise);

                promise.then(function (response) {
                    if (response.length != 0) {
                        nidCtrl.nothingFound = false;
                    };
                    nidCtrl.found = response;
                     

                }); // then
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
            
                return $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json'})
                    .then(function (result) {
                    var foundItems = [];
                    // process result and only keep items that match
                    var processedItems = result.data.menu_items;
                    console.log('items.length: ', processedItems.length);
                    console.log('************');

                    var cpt = 0;
                    for (var i = 0; i < processedItems.length; i++){
                        var processedString = processedItems[i].description;
                        // console.log("processedString: ", processedString);
                        // console.log("processedString.indexOf(searchTerm) != -1 : ",processedString.indexOf(searchTerm) != -1 );
                        if (processedString.indexOf(searchTerm) != -1) {
                            
                            foundItems.push(processedItems[i]);
                            //console.log('foundItems[' + cpt + ']: ', foundItems[cpt].description);
                            cpt++;
                        }

                    }; // for
                    // console.log('foundItems.length: ', foundItems.length);
                    // console.log('foundItems: ', foundItems);

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
                onRemove:'&'
            },
            controller: FoundItemsListController,
            controllerAs: 'listCtrl',
            bindToController: true
        };

        return ddo;
    }; //FoundItemsDirective

        //controller 
    function FoundItemsListController() {
        var listCtrl = this;
       

    };

})();
