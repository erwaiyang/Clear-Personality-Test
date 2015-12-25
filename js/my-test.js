angular.module('MyTestApp', [])
	.controller('TestCtrl', function($http) {
		var ctrl = this;
		$http.get('./js/data/questions.json')
			.then(function(res){
				ctrl.questions = res.data;
				ctrl.q = ctrl.questions[0];

				ctrl.goToDst = function(dst){
					if(typeof dst == 'string'){
						ctrl.getResult(dst);
						jQuery('html, body').delay(150).animate({
							'scrollTop': jQuery('#my-result').offset().top
						}, 500);
					}else if(typeof dst == 'number'){
						ctrl.q = ctrl.questions[dst-1];
					}
				};
			});
		$http.get('./js/data/types.json')
			.then(function(res){
				ctrl.types = res.data;
				console.log(ctrl.types);
				ctrl.getResult = function(type){
					ctrl.result = ctrl.types[type];
				};
			});
	});