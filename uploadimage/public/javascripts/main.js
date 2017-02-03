(function () {
   'use strict';

   angular
    .module('PictureApp', ['ngResource', 'ngRoute','ngFileUpload'])
    .config(config)
    // .run(run);



    config.$inject = ['$routeProvider', '$locationProvider'];
     function config($routeProvider, $locationProvider) {
       $routeProvider
       .when('/newpicture',{
        controller: 'PictureController',
        templateUrl:'templates/pictures/form.html'
       })
              .when('/showpicture',{
        controller: 'PictureController',
        templateUrl:'templates/pictures/show.html'
       })
       // .otherwise({ redirectTo: '/login' });
      }

  //   run.$inject = ['$rootScope', '$location','AuthService'];
  //   function run($rootScope, $location,AuthService) {
  //   console.log("test")
  //   if(AuthService.notAuthenticated)
  //   {
  //     $location.path('/login')
  //   }
  // }


})();