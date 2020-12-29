$(document).ready(function(){

	/* авто карусель */
	$(".auto_gallery").owlCarousel({
		nav:false,
		loop:true,
		mouseDrag: false,
		margin:50, 
		smartSpeed:1000, 
		items:1,
		autoplay:true,
		autoplayTimeout:2000
	});

});



$(function(){

	/* якорь */
	$(".toForm").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	/* карусель отзывов*/
	$(".reviews_list").owlCarousel({
		nav: true,
		navText: "",
		loop:true,
		margin:50, 
		smartSpeed:1000, 
		items:1,
		autoHeight:true
	});

	timeCol = new Date();
	var tovCol = timeCol.getHours()*2 + Math.floor(timeCol.getMinutes()/25);
	$('.product_count>span').html(55 - tovCol + ' шт.');
});