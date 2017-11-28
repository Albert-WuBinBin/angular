var app=angular.module("myApp",['ui.router'])

app.service("heaxfy",function(){	//自定义服务
	this.myFun=function(x){
		return x.toString(16)
	}
})
app.filter("myFilter",["heaxfy",function(heaxfy){	//自定义拦截器
	return function(x){
		return heaxfy.myFun(x)
	}
}])
app.controller("myController",function($scope,heaxfy){
	$scope.username="wbb"
	$scope.hex=heaxfy.myFun(255)
})
app.controller("menuController",function($scope,$state){
	$scope.click1=function(){
		$state.go("system",{id:1})
	}
	$scope.click2=function(){
		$state.go("system",{id:2})
	}
})
