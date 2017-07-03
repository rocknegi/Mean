app.controller("myctrl",($scope,myfactory,)=>{
        var promise = myfactory.get();

        promise.then(function(data){
				$scope.result= data;
                  var arr=[];
                  angular.forEach($scope.result, function(i,data){
                  arr.push($scope.result);

                   $scope.submit=(val,pass)=>{
                        alert("Searching for " + val);
                       console.log(arr);
                      for (var i = 0; i < arr.length; i++) {
                     if (arr[i].one.name === val||arr[i].two.name === val||arr[i].three.name==pass||arr[i].four.name==pass||arr[i].five.name ==pass)
                 {
                     console.log("true");
//                     $scope.store = $localStorage;
//                     store.name = val;
                     localStorage.setItem('session', val);
                     var x = location.href="pages/welcome.html"
                     alert("Logging you in")

                 return true;
        }
                     else {
                         console.log("false");
                         alert("wrong id or pass");
                        return false;

                     }
    }
                     }




})

                },function(err){
				$scope.result  = err;
			});



	});
