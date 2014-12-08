;(function(){
  'use strict';

	angular.module('todoApp', ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider
				.when('/', {})
				.otherwise({
					redirectTo: '/'
				})
		})

	.controller('TodoController', function(){
		var vm = this;
		vm.tasks = [
			{
				name: 'Learn Angular',
				desc: 'If I learn this, I make $$$',
				due: 'Today',
				image:
			},
			{
				name: 'Finish Tic Tac Toe',
				desc: 'Grrrrrrrrrrrr',
				due: 'Monday',
				image:
			},
			{
				name: 'Get a job',
				desc: ' make $$$',
				due: 'Tomorrow',
				image:
			}
	];
	
		vm.addNewTask = function(){
		vm.tasks.push(vm.newTask);
		vm.newTask = _freshTash();
		};

		vm.removeTodo = function(todo){
			var index = vm.tasks.indexOf(todo);
			vm.tasks.splice(index,1);
		};
		vm.newTask = _freshTask();
		vm.priorityOptions = {
				high: 'High',
				medium: 'Medium',
				low: 'Low',
				whocares: 'Whatevs'
		};

		function _freshTask(){
			return {
					priority: 'low'
			}
		}
	});

}());
