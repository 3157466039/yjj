angular.module('crrApp')
       .controller("dl",['$scope','$http','server','$cookieStore','$cookies','$state',function ($scope,$http,server,   $cookieStore,$cookies,$state) {
		
		if($cookies.get('username',$scope.updata)&&$cookies.get('password',$scope.updata)){
		$state.go('c')
      	}

	$scope.fn=function(){
      $http({
			url:server+"/users/login",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			 $cookieStore.put("ab",e.uid);
			if($scope.check==true){
				$cookieStore.put("username",$scope.updata);	
				$cookieStore.put("password",$scope.updata);	
				
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 6);
	       } 
		   $state.go('c');
		})
	}
	
}])

.controller("zc",['$scope','$http','server','$state',function ($scope,$http,server,$state) {
	$scope.fn1=function(){
		$http({
			url:server+"/users",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			$state.go("a");
		})
		
	}
}])



.controller("sou",['$scope','$http','$state','server','$stateParams','$cookieStore',function ($scope,$http,$state,server,$stateParams,$cookieStore) 
{
	$scope.uid=$cookieStore.get('ab');
	$scope.x=$stateParams;
	$scope.updata={"uid":$scope.uid}
	
	$http({
			url:server+"/item",
			method:"GET",
			params:{"$skip":num,"$limit":5,'uid':$scope.uid}
		}).success(function(e){
			$scope.data=e;
		})
		
		$http({
			url:server+"/tag",
			method:"GET"
		}).success(function(e){
			$scope.tdata=e;
		})
	
	   $scope.tag=function(){
		   
		   }
	
		$scope.jia=function(){
		$http({
			url:server+"/item",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			debugger;
			$state.go("c");
		})
	}
	
	
	$scope.gai=function(){
		$http({
			url:server+"/item",
			method:"PUT",
			data:$scope.x
		}).success(function(e){
			debugger;
		//	$scope.data.push($scope.x)
			$state.go("c");
		})
	}
	
	$scope.dit=function(e){
		$http({
			url:server+"/item/"+e.id,
			method:"DELETE"
		}).success(function(e){
			$scope.data.splice($scope.data.indexOf(e),1)
			$state.go("c");
		})
	}
	$scope.tui=function(){
			//$cookieStore.username='';	
		
		$cookieStore.remove("username")
		$cookieStore.remove("password")
			$state.go("a");
		
		}
	

	
	var num=0
    $scope.down=function(){
	num+=5
	$http({
			method:'get',
			url:server+'/item',
			params:{"$skip":num,"$limit":5}
		}).success(function(e){
			
			//debugger
			$scope.data=e
		})
	}
    $scope.top=function(){
	num-=5
	$http({
			method:'get',
			url:server+'/item',
			params:{"$skip":num,"$limit":5}
		}).success(function(e){
			//debugger
			$scope.data=e
		})
	}
	
	
	
}])







