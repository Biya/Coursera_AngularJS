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
        console.log('CONTROLLER');
        nidCtrl.getFoundItems = function () {
            //console.log('Entree dans fonction clic');
            var promise = MenuSearchService.getMatchedMenuItems(nidCtrl.searchWord);  
            promise.then(function (response) {
                nidCtrl.found = response;
                console.log('found: ', nidCtrl.found);
            });

        }; //getFoundItems

        nidCtrl.removeItem = function (index) {
            console.log('*** Enter nidCtrl.removeItem ***');
            console.log('nidCtrl.found.length: ', nidCtrl.found.length);
            nidCtrl.found.splice(index, 1);
            console.log('nidCtrl.found.length after remove: ', nidCtrl.found.length);

        };// removeItem

    }; //nidCtrlFunction


    // service MenuSearchService    
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {

            var foundItems = [];
            
            if (searchTerm == "") {
                return foundItems;
            } else {
                return $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json'})
                    .then(function (result) {
                    
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
                    console.log('foundItems.length: ', foundItems.length);
                    console.log('foundItems: ', foundItems);

                    // return processed items
                    return foundItems;
                        
                    }); // end of then

            } // else
            
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
        var directiveCtrl = this;

    };

})();
