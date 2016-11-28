(function () {
    
    "use strict";

    angular.module('public')
        .service('UserPrefService', UserPrefService);
    
    function UserPrefService() {
        var service = this;
        service.user = {};
        service.isRegistered = false;
        
        // to save user preferences in the service
        service.saveUserPref = function (user) {
            service.user.firstName = user.firstName;
            service.user.lastName = user.lastName;
            service.user.email = user.email;
            service.user.phone = user.phone;
            service.user.favoriteDish = user.favoriteDish;

            service.isRegistered = true;
        };

        //to retrieve user preferences in the service        
        service.getUserPref = function () {

            return service.user;  
        };

        

    };

})();