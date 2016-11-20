(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: "src/templates/categories.template.html",
            controller:categoriesComponentController,
            bindings: {
                categoriesList:'<'
            }      
        });

    
    categoriesComponentController.$inject = ['$scope', '$element'];
    function categoriesComponentController($scope, $element) {
        var $ctrl = this;
        console.log("*** categoriescomponentController ***");
        console.log("param: ", $ctrl);

    }
})();