$(function(){


 $('.navbar-toggler').click(function(e){
 e.preventDefault();

	var target = $(this).attr('href');
	$(target).toggleClass('collapse');
});

//btn.onmouseover = function(){btnch.style.backgroundColor='#49cbcd'};
//btn.onmouseout = function(){btnch.style.backgroundColor=''};

//$('.btn').onmouseover(function(){event})




})
