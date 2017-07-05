app.controller("myctrl",($scope,myfactory,)=>{
        var promise = myfactory.get();

        promise.then(function(data){
				$scope.result= data;
                  var arr=[];
                  angular.forEach($scope.result, function(i,data){
                  arr.push($scope.result);

                   $scope.submit=(id,pass)=>{
                        alert("Searching for " + id);
                       console.log(arr);
                      for (var i = 0; i < arr.length; i++) {
                     if (arr[i].one.name === id||arr[i].two.name === id||arr[i].three.name==id||arr[i].four.name==id||arr[i].five.name ==id)
                 {
                     if (arr[i].one.pass === pass||arr[i].two.pass === pass||arr[i].three.pass==pass||arr[i].four.pass==pass||arr[i].five.pass ==pass)
                         {
                     console.log("true");
//                     $scope.store = $localStorage;
//                     store.name = val;
                     localStorage.setItem('session',id);
                     console.log(localStorage.getItem('session',id));
                     var x = location.href="pages/welcome.html";
                     alert("Logging you in");

                 return true;
        }
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
