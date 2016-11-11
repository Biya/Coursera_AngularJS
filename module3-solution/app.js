(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', nidCtrlFunction)
        .service('MenuSearchService', MenuSearchService);
    
    MenuSearchService.$inject['$http']
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            
        };
    };

})();
