(function () {
    "use strict";

  angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['ApiPath','UserPrefService','MenuService'];
function SignupController(ApiPath,UserPrefService,MenuService) {
    var signupCtrl = this;
    signupCtrl.errorMsgItem = 'No such menu number exists';
    signupCtrl.validationMsg = 'Your information has been saved';

    // definition of submit() function
    signupCtrl.submit = function () {
        
        var promise = MenuService.getOneMenuItem(signupCtrl.user.favoriteDish);
        promise.then(function (response) {
            signupCtrl.itemNotValid = false;

            UserPrefService.saveUserPref(signupCtrl.user);
            console.log("UserPrefService.isRegistered: ", UserPrefService.isRegistered);
            signupCtrl.infoSaved = true;
            console.log("user: ",UserPrefService.getUserPref());
        })
            .catch(function (error) {
                UserPrefService.isRegistered = false;
                signupCtrl.itemNotValid = true;
                signupCtrl.infoSaved = false;
                //console.log(signupCtrl.itemNotValid);
            });
    };




//   signupCtrl.allMenuItems = menuItems; // this is an Object, not an array
//   console.log("allMenuItems: ", signupCtrl.allMenuItems.menu_items);
    
//   for (var i = 0; i < signupCtrl.allMenuItems.menu_items.length; i++) {
//       console.log("allMenuItems[i]: ",signupCtrl.allMenuItems.menu_items[i].short_name) ;
      
//   }
}  


})();