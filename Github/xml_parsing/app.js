var ninjaapp = angular.module('app', []);
ninjaapp.controller('ctrl', ['$scope','$http', '$window', function($scope, $http, $window) {
    $scope.url = "https://account.webspidermount.com/download/post/MzU0MDIxNzcyMjM=/";
    $scope.xml = "";
    $scope.titleArr = [{"tagname":"value"}];



    $scope.run = function(){
        console.log("scope.run has started");
        $scope.newurl = ""+$scope.url;

        // THIS WORKS
        $http({
            method  : 'GET',
            url     : $scope.url,
            timeout : 10000,
            params  : {},  // Query Parameters (GET)
            transformResponse : function(data) {
                return $.parseXML(data);
            }
            }).then(function(response, data) {
                console.dir(response.data.all[5]);  // XML document objec
                console.log(response);
                $scope.xml = response.data.all[5].tagName + ": "+ response.data.all[5].textContent;

                var res = response.data.all;
                for(var x=0;x<res.length;x++){
                    var jsonvar = {};
                    var a = res[x].tagName;
                    var b = res[x].textContent;
                    jsonvar[a] = b
                    $scope.titleArr.push(jsonvar);
                }
              }, function errorCallback(response) {
                  $window.alert('error - No URL');
        }); //End http
 

    };//END SCOPE RUN FUNCTION
    console.log($scope.titleArr);
}]);
