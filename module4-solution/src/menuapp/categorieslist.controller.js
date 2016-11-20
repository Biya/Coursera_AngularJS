(function () {
    
    'use strict';
    
    angular.module('Data')
        .controller('CategoriesListController', CategoriesListController);
    
    CategoriesListController.$inject = ['MenuDataService', 'allCategories'];
    function CategoriesListController(MenuDataService,allCategories) {
        console.log(" *** Welcome to CategoriesListController");
        var categoriesCtrl = this;
        categoriesCtrl.allCategories = allCategories;
        console.log("categoriesCtrl.allCategories: ", categoriesCtrl.allCategories);

    }


})();