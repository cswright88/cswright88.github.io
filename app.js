var ninjaapp = angular.module('app', []);
ninjaapp.controller('ctrl', ['$scope', function($scope) {

  $scope.fileName = "";
  $scope.firstTag = "";
  $scope.firstInput = "";
  $scope.secondTag = "";

  $scope.output = "Your output will be here: ";
  $scope.array = [];

  $scope.checkboxModel = {
    value : true
  };
  $scope.before = {
    value : false
  };
  $scope.after = {
    value : false
  };
  $scope.num_lines = {
    value: 1
  };
  $scope.commandArr = [];
  $scope.echoArr = [];
  // handel multiple inputs for first tag values




  $scope.run = function(){
    $scope.echoArr = [];
    $scope.commandArr = [];
    $scope.array = $scope.firstInput.split(",");

    if($scope.checkboxModel.value === false){
  // if before == true add the num lines
    if($scope.before.value === true){
        for(x=0;x<$scope.array.length;x++){
          $scope.commandArr.push("var"+x+"=$(grep -B "+$scope.num_lines.value+" '"+$scope.firstTag+"' "+ $scope.fileName+ " | grep -B "+$scope.num_lines.value+" '"+$scope.array[x]+"' | grep '"+$scope.secondTag+"') &&");
          $scope.echoArr.push("echo ${var"+x+"}, "+$scope.array[x]+" &&");
        }
        $scope.echoArr.push('echo done');
        $scope.commandArr.push("echo first_col, secondCol");
      }
      // elif after == true
      else if($scope.after.value === true){
        for(x=0;x<$scope.array.length;x++){
          $scope.commandArr.push("var"+x+"=$(grep -A "+$scope.num_lines.value+" '"+$scope.firstTag+"' "+ $scope.fileName+ " | grep -A "+$scope.num_lines.value+" '"+$scope.array[x]+"' | grep '"+$scope.secondTag+"') &&");
          $scope.echoArr.push("echo ${var"+x+"}, "+$scope.array[x]+" &&");
        }
        $scope.echoArr.push('echo done');
        $scope.commandArr.push("echo first_col, secondCol");
      }else{
      // else do the below
        for(x=0;x<$scope.array.length;x++){
          $scope.commandArr.push("var"+x+"=$(grep '"+$scope.firstTag+"' "+ $scope.fileName+ " | grep '"+$scope.array[x]+"' | grep '"+$scope.secondTag+"') &&");
          $scope.echoArr.push("echo ${var"+x+"}, "+$scope.array[x]+" &&");
        }
        $scope.echoArr.push('echo done');
        $scope.commandArr.push("echo first_col, secondCol");
      }
    }
    // if checkbox value = true
    else{
      // if before == true add the num lines
      if($scope.before.value === true){
        for(x=0;x<$scope.array.length;x++){
          $scope.commandArr.push("var"+x+"=$(grep -B "+$scope.num_lines.value+" '"+$scope.firstTag+"' "+ $scope.fileName+ " | grep -B "+$scope.num_lines.value+" '"+$scope.array[x]+"' | grep '"+$scope.secondTag+"' | sort | uniq -c) &&");
          $scope.echoArr.push("echo ${var"+x+"}, "+$scope.array[x]+" &&");
        }
        $scope.echoArr.push('echo done');
        $scope.commandArr.push("echo first_col, secondCol");
      }
      // elif after == true
      else if($scope.after.value === true){
        for(x=0;x<$scope.array.length;x++){
          $scope.commandArr.push("var"+x+"=$(grep -A "+$scope.num_lines.value+" '"+$scope.firstTag+"' "+ $scope.fileName+ " | grep -A "+$scope.num_lines.value+" '"+$scope.array[x]+"' | grep '"+$scope.secondTag+"' | sort | uniq -c) &&");
          $scope.echoArr.push("echo ${var"+x+"}, "+$scope.array[x]+" &&");
        }
        $scope.echoArr.push('echo done');
        $scope.commandArr.push("echo first_col, secondCol");
      }else{
      // else do the below
        for(x=0;x<$scope.array.length;x++){
          $scope.commandArr.push("var"+x+"=$(grep '"+$scope.firstTag+"' "+ $scope.fileName+ " | grep '"+$scope.array[x]+"' | grep '"+$scope.secondTag+"' | sort | uniq -c) &&");
          $scope.echoArr.push("echo ${var"+x+"}, "+$scope.array[x]+" &&");
        }
        $scope.echoArr.push('echo done');
        $scope.commandArr.push("echo first_col, secondCol");
      }

    };
}
}]);
