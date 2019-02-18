$(document).ready(function(){

	$('.highlights .limit div').slice(0, 3).addClass('stick');

	$('.stick:first-child').addClass('active');
	$('.stick').hover(function(){
		$('.highlights .limit .stick').removeClass('active');
		$(this).addClass('active');
	});


	$('.listsArticles .tabs li:first-child, .list:first-child').addClass('active');
	$('.listsArticles .tabs a').click(function(e){
		var idTab = $(this).attr('data-target');
		
		$('.listsArticles .tabs li, .list').removeClass('active');
		$(this).parent().addClass('active');

		$(idTab).addClass('active');
		e.preventDefault();
	})


});