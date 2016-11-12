(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', nidCtrlFunction)
        .service('MenuSearchService', MenuSearchService);
    
    nidCtrlFunction.$inject = ['MenuSearchService'];
    function nidCtrlFunction(MenuSearchService) {
        var nidCtrl = this;
        console.log('CONTROLLER');
        nidCtrl.getFoundItems = function () {
            console.log('Entree dans fonction clic');
            var promise = MenuSearchService.getMatchedMenuItems(nidCtrl.searchWord);       
            promise.then(function (response) {
                nidCtrl.found = response;
                console.log('found: ', nidCtrl.found);
            });

            // console.log('typeOf nidCtrl.found: ', typeof (nidCtrl.found));
            // console.log('nidCtrl.found: ', nidCtrl.found);

    
        }; //getFoundItems

    }; //nidCtrlFunction


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {

            if (searchTerm == "") {
                return [];
            } else {
                return $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json'})
                    .then(function (result) {
                    
                    // process result and only keep items that match
                    var foundItems = [];
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

            }
            
        };
    };

})();
