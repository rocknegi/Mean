app.controller("myctrl",($scope,myfactory)=>{
  $scope.add=()=>{
		myfactory.itemOperations($scope.name,$scope.desc);
      console.log(myfactory.arr);
        $scope.item=myfactory.arr;
	
	}
    
})