app.controller("myctrl",($scope,myfactory,)=>{
        var promise = myfactory.get();

        promise.then(function(data){
				$scope.result= data;
            },function(err){
				$scope.result  = err;
			});
         
                  

                   $scope.submit=(id,pass)=>{
                        alert("Searching for " +id);
                       console.log($scope.result);
                       for(var i in $scope.result){
                           //console.log($scope.result[i]);
                           if($scope.result[i].name==id && $scope.result[i].pass==pass){
                               console.log("true");
                               alert("Logging you in Mr " +id);
                               var x = location.href="pages/welcome.html";
                               break;
                           }
                           else                        
                          {
                         
                         alert("wrong id or pass");
                         break;
                        }
                           }
                       
}

         


	});