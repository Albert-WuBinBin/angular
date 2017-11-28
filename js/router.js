app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/system/0")
	$stateProvider
	.state({
		name:"system",
		url:"/system/{id}",
		views:{
			"main":{
				templateUrl:function($stateParams){
					switch(Number($stateParams.id)){
						case 1:
							return "test1.html";
							break;
						case 2:
							return "test2.html";
							break;
						default:
							return "test.html";
						break;
					}
					
				}
			},
			"test2@system":{
				templateUrl:"test3.html"
			},
			"test4@system":{
				templateUrl:"test4.html"
			}
		}
		
	})
})