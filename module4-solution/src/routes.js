(function () {
    'use strict';

    angular.module('MenuApp').
        config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

        // Home page
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/templates/categorieslist.template.html',
            controller: 'CategoriesListController as categoriesCtrl',
            resolve: {
                // fetch array
                allCategories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('categories.items', {
            url:'/itemsforcategory/{categoryName}',
            templateUrl: 'src/templates/itemslist.template.html',
            controller:'ItemsListController as itemsCtrl',
            resolve: {
                allItems:['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryName);
                }]
            }
        });
    
    };
    

})();