(function () {
    'use strict';
    angular.module('Data')
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;


        service.getAllCategories = function () {
            return $http({ url: 'https://davids-restaurant.herokuapp.com/categories.json' })
                .then(function (result) {
                    console.log("result: ", result);
                    console.log("result.data: ", result.data);

                    return result.data;
                });
        };

        service.getItemsForCategory = function (categoryShortName) {
            
        };
        
    };

})();


