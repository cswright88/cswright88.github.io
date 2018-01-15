console.log("main.js is working");


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.author = "chris wright";
});
