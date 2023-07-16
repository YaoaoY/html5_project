$('.ptop').mouseenter(function() {
	$('.intro1').stop().fadeIn(200)
}).mouseleave(function() {
	$('.intro1').stop().fadeOut(200)
})
$('.pbottom').mouseenter(function() {
	$('.intro2').stop().fadeIn(200)
}).mouseleave(function() {
	$('.intro2').stop().fadeOut(200)
})

$('.pright').mouseenter(function() {
	$('.intro4').stop().fadeIn(200)
}).mouseleave(function() {
	$('.intro4').stop().fadeOut(200)
})
$('.pleft').mouseenter(function() {
	$('.intro3').stop().fadeIn(200)
}).mouseleave(function() {
	$('.intro3').stop().fadeOut(200)
})

var degree = 0

$(document).ready(function() {
	var degree = 0;
	setInterval(function() {
		degree += 8;
		if (degree > 8) {
			degree = -8
		}
		$('.innerBox').css({
			'transform': 'rotate(' + degree + 'deg)'
		});
	}, 1200);
});

$(document).ready(function() {
	var position = 0;
	setInterval(function() {
		position -= 1;
		$('.cloud').css({
			'background-position': position + 'px 0px'
		});
	}, 10);
});