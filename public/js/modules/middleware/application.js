'use strict';

var app = angular.module('ApplicationModule', []);

app.factory('RoutingFactory', [
	'$timeout', '$state', 
	function($timeout, $state) {
		return {
			goToState : function(location) {
				$timeout(function(){
					$state.go(location);
				}, 500);
			}
		}
	}
]);

app.service('qService', [
	'$http', '$q',
	function($http, $q) {
		var self = this;

		self.get = function(url) {
			var q = $q.defer();

			$http.get(url)
			.success(function(data){
				q.resolve(data);
			})
			.error(function(err){
				q.reject(err);
			});

			return q.promise;
		}
	}
]);