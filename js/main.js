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
	]

});

}());
