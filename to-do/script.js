$(function(){
	function listInspector(){
	var list = $('.item').length;
	if (list != 0) 
		{
			$('#empty').css('display','none');
		}
	else
		{
			$('#empty').removeAttr('display');
		}
	}
	listInspector();
	/*setInterval(listInspector, 300); - почему нельзя просто заставить код проверять значение постоянно, через n-секунд? Похоже на цикл*/

	function listenToAddButton(){
	$('#add-button').click(function(){
		var newTaskTitle = $('#title').val();
		var newTaskDiscrpt = $('#dscrpt').val();
		var newItemTask = '<li class="item"><div class="item-title">'+ newTaskTitle +'<button class="item-clear"><img src="img/icon-clear.png" alt="del"></button><button class="item-hide"><img src="img/icon-arrow.png" alt="hide"></button></div><div class="item-dscrpt">'+ newTaskDiscrpt +'</div></li>';
		$('ul').prepend(newItemTask);
		$('#title').val('');
		$('#dscrpt').val('');
		$('#empty').css('display','none');
		listenToDelButton();
		listenToHideButton();
		});
	};
	listenToAddButton();

	function listenToDelButton(){
		$('.item-clear').click(function(){
			$(this).parents('.item').remove();
			listInspector(); /*почему это не срабатывает? я хочу чтоб по клику запускалась проверка на пустой лист*/
		});
	};

	function listenToHideButton(){
		$('.item-hide').click(function(){
			$(this).toggle('.item-dscrpt'); /*уже заценил как эта строка работает? я на этом взоржал и пошел спать. <button> сказала fuckyou и ушла*/
		});
	};
});


