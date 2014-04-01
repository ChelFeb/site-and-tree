// Controllers

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
	$scope.phones = [
				{'name' : 'Name 1',
		'snippet' : 'This is simply a name'},
				{'name' : 'Name 2',
		'snippet' : 'This is no simply a name'},
				{'name' : 'Name 3',
		'snippet' : 'Nothing'}
	];
});
