$(function(){


 $('.navbar-toggler').click(function(e){
 e.preventDefault();

	var target = $(this).attr('href');
	$(target).toggleClass('collapse');
});


if($(window).width() > '820') {
  $('.bxslider').bxSlider(
      {
       pager:false
      }
    )
}

 $('.btn').mouseover(function(){
	$(this).parent().siblings('.card-header').css('background','#49cbcd')
	
})

 $('.btn').mouseout(function(){
	$(this).parent().siblings('.card-header').css('background','#485460')
})

})





  
  
