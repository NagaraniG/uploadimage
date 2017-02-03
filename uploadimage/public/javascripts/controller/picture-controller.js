// var app = angular.module('PictureApp', ['ngFileUpload','ngRoute','ngResource']);

// app.controller('PictureController', ['$scope', 'Upload', function ($scope, Upload) {
//     // upload later on form submit or something similar
//     $scope.submit = function() {
//       if ($scope.form.file.$valid && $scope.file) {
//         $scope.upload($scope.file);
//       }
//     };


(function(){
  'use strict';
  angular.module('PictureApp').controller('PictureController',['$rootScope','$scope', '$http','$location','$resource','Upload',function PictureController($rootScope,$scope, $http, $location, $resource,Upload){    
console.log("hello")
      $scope.submit = function() {
      if ($scope.uploadimage.fileimage.$valid && $scope.file) {
        $scope.upload($scope.file);

        console.log("hii")
        console.log($scope.uploadimage.fileimage)
        console.log($scope.uploadimage.fileimage.$valid)
        console.log($scope.file)
      }
    };
    // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: '/pictures.json',
            data: {'picture[avatar]': file, 'picture[name]': $scope.name}
        }).then(function (resp) {
            console.log(resp.data);
        } );
    };



}])
})()



// var app=angular.module("PictureApp",['ngFileUpload'])



// app.controller('PictureController',['$scope','Upload',function($scope,Upload){
//   $scope.upload = function (files) {
//     for (var i = 0; i < files.length; i++) {
//         var file = files[i];
//         $scope.upload = Upload.upload({
//             url: '/pictures.json',
//             method: 'POST',
//             fields: { 'user[name]': $scope.name },
//             file: file,
//             fileFormDataName: 'user[image]'
//         });
//     }
// }
// }])































// (function(){
//   'use strict';
//   angular.module('PictureApp').controller('PictureController',PictureController)
//     PictureController.$inject=['$rootScope','$scope', '$http','AuthService', 
//     '$location', '$resource']
//      function PictureController($rootScope,$scope, $http, AuthService,$location, $resource){

//     // console.log("wwew");

//     //  var api=window.localStorage.getItem("CONTACT_AUTH_TOKEN")

//     // console.log(api)


 
//     $http.post('/pictures.json',{'name':$scope.name,'avatar':$scope.avatar}).then(function(response){

//     }
//   }
// })()


//       // console.log(response.data.data.team)
      
