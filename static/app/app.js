
//定义主模块并注入依赖
angular.module("godEyeApp", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/index/welcome", {
		templateUrl: "/static/index.html",
		//controller: playerListCtrl
	}).when("/index/performance",{
        templateUrl:'/static/performanceMonitor.html',
    }).otherwise({
		redirectTo: "/index/welcome"
	});
}]);