(function () {
    'use strict';
    angular.module('Data')
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;


        service.getAllCategories = function () {
            // return $http({ url: 'https://davids-restaurant.herokuapp.com/categories.json' })
            //     .then(function (result) {
                
            //     });
        };

        service.getItemsForCategory = function () {
            
        };
        
    };

})();


