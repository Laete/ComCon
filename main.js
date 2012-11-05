
function processResize(){
	var ratio = 290/260;
	var title_height = 50;
	
	var height = window.innerHeight-$('.menu-container').height()-60;
	var block_height = height/2-30;
	
	var background_height = block_height - title_height;
	var background_width = background_height/ratio;
	
	var picture_height = background_height*0.7;
	var picture_width = background_width*0.7;
	
	$('.btn-picture').css('background-size', picture_width+'px, '+picture_height+'px');
	$('.btn-picture').width(picture_width);
	$('.btn-picture').height(picture_height+40);
	
	$('.background').css('background-size', background_width+'px, '+background_height+'px');
	$('.background').width(background_width);
	$('.background').height(background_height-50);
	
	$('.title').css('background-size', background_width+15+'px, '+title_height+'px');
	$('.title').width(background_width+15);
	$('.title').height(title_height);
	
	$('.menu-button').width(background_width);
	$('.menu-button').height(background_height+title_height);
	
	
	$('#main-page').height(window.innerHeight-$('.menu-container').height()-60);
	
}

$(function(){
	processResize();
	$('html, body').animate({scrollTop: '0px'}, 300);	
});

$(document).on('click', '#read-more', function(event){
	event.preventDefault();
	$(document).scrollTop( $("#info").offset().top )
	return false;
})

$(window).on('resize', function(){
	processResize();
})