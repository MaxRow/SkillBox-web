$(function(){
	function listCheck(){
	var list = $('.item').length;
	if (list != 0) 
		{
			$('#empty').hide();
		}
	else
		{
			$('#empty').fadeIn();
		}
	}
	listCheck();
	
	function listenToAddButton(){
	$('#add-button').click(function(){
		var newTaskTitle = $('#title').val();
			if(!newTaskTitle){
				alert('Необходимо ввести какое-либо название')
				return false
			}
		var newTaskDiscrpt = $('#dscrpt').val();
			if(!newTaskDiscrpt){
				alert('Необходимо ввести какое-нибудь описание')
				return false
			}
		var newItemTask = '<li class="item"><div class="item-title">'+ newTaskTitle +'<button class="item-clear"><img src="img/icon-clear.png" alt="del"></button><button class="item-hide"><img class="arrow" src="img/icon-arrow.png" alt="hide"></button></div><div class="item-dscrpt">'+ newTaskDiscrpt +'</div></li>';
		$('ul').prepend(newItemTask);
		$('#title').val('');
		$('#dscrpt').val('');
		$('#empty').hide();
		listenToDelButton();
		listenToHideButton();
		});
	};
	listenToAddButton();

	function listenToDelButton(){
		$('.item-clear').click(function(){
			$(this).parents('.item').remove();
			listCheck();
		});
	};


	function listenToHideButton(){
		$('.item-hide').off('click').on('click',(function(){
			$(this).parent().next().slideToggle(150);
			$(this).children('.arrow').toggleClass('flip');
		}));
	};
});


