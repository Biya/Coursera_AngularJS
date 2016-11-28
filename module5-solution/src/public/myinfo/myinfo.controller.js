(function () {
    "use strict";

    angular.module('public')
        .controller('myInfoController', myInfoController);
    

    myInfoController.$inject = ['ApiPath', 'MenuService','UserPrefService','userInfo'];
    
    function myInfoController(ApiPath, MenuService,UserPrefService,userInfo) {

        var myInfoCtrl = this;
        myInfoCtrl.userInfo = userInfo;
        myInfoCtrl.basePath = ApiPath;
        myInfoCtrl.isRegistered = UserPrefService.isRegistered;
        console.log('userInfo: ', userInfo);

        var promise = MenuService.getOneMenuItem(myInfoCtrl.userInfo.favoriteDish);
        promise.then(function (response) {
           myInfoCtrl.itemToDisplay = response.data;
            console.log('response.data: ', myInfoCtrl.itemToDisplay);
        });
    };


})();