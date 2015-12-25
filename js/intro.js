/*eslint-env jquery */
// $('#intro-text').hover(
// 	function(){
// 		$('.dimmer').dimmer('show');
// 		console.log('hover');
// 	},
// 	function(){
// 		//$('.dimmer').dimmer('hide');		
// 	}
// );

$('#start-btn').on('click', function(){
	$('html, body').delay(150).animate({
		'scrollTop': $('#my-test').offset().top
	}, 500);
});