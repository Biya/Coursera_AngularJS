(function () {
    
    'use strict';
    
    angular.module('MenuApp')
        .controller('CategoriesListController', CategoriesListController);
    
    CategoriesListController.$inject = [ 'allCategories'];
    function CategoriesListController(allCategories) {
        console.log(" *** Welcome to CategoriesListController");
        var categoriesCtrl = this;
        categoriesCtrl.allCategories = allCategories;
        console.log("categoriesCtrl.allCategories: ", categoriesCtrl.allCategories);

    }


})();