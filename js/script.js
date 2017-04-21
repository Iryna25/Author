$(function(){


 $('.navbar-toggler').click(function(e){
 e.preventDefault();

	var target = $(this).attr('href');
	$(target).toggleClass('collapse');
});


})
