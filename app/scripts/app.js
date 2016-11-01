'use strict';

/**
 * @ngdoc overview
 * @name crrApp
 * @description
 * # crrApp
 *
 * Main module of the application.
 */

angular.module('crrApp',["ui.router","ngCookies"]).constant("server","http://www.somenote.cn:1510")
  .controller('app',['$scope','$http',function($scope,$http){
	}])
 .config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
  	$stateProvider.state("a",{
  		url:"/a",
  		templateUrl:"views/dl.html",
		controller:'dl'
  	}).state("b",{
  		url:"/b",
  		templateUrl:"views/zc.html",
		controller:'zc'
  	}).state("c",{
  		url:"/c",
  		templateUrl:"views/list.html",
		controller:'sou'
  	}).state("d",{
  		url:"/d",
  		templateUrl:"views/jia.html",
		controller:'sou'
  	}).state("e",{
  		url:"/e",
  		templateUrl:"views/xq.html",
		controller:'sou'
  	}).state("f",{
  		url:"/f?id&title&content",
  		templateUrl:"views/xq.html",
		controller:'sou'
  	})
	
	
	
	
	$urlRouterProvider.when('','/a');
  }])




