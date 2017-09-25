app.controller("myctrl",($scope,myfactory,$localStorage,)=>{
        var promise = myfactory.get();

        promise.then(function(data){
				$scope.result= data;
            },function(err){
				$scope.result  = err;
			});
         
                  

                   $scope.submit=(id,pass)=>{
                        alert("Searching for " +id);
                      // console.log($scope.result);
                       var bool = false;
                       for(var i in $scope.result){
                          // console.log();
                           if($scope.result[i].name==id && $scope.result[i].pass==pass){
                               console.log("true");
                               alert("Logging you in Mr " +id);
                               var x = location.href="pages/welcome.html";
                               $scope.storage = $localStorage;
                               $scope.storage.id=id;
                               bool = true;
                              
                           }
                          
                           }
                        if(!bool)                        
                          {
                                                     
                         alert("wrong id or pass");
                        
                        
                        }
                       
}

         


	});