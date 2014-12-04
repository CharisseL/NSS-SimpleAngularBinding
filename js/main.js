;(function(){
  'use strict';

angular.module('todoApp', [])
	.controller('TodoController', function(){
		var vm = this;
		vm.tasks = [
			{
				name: 'Learn Angular',
				desc: 'If I learn this, I make $$$',
				due: 'Today'
			},
			{
				name: 'Finish Tic Tac Toe',
				desc: 'Grrrrrrrrrrrr',
				due: 'Monday'
			},
			{
				name: 'Get a job',
				desc: ' make $$$',
				due: 'Tomorrow'
			}
	];
	
		vm.addNewTask = function(){
		vm.tasks.push(vm.newTask);
		vm.newTask = null;
		};

		vm.removeTodo = function(todo){
			var index = vm.tasks.indexOf(todo);
			vm.tasks.splice(index,1);
		}
	});

}());
