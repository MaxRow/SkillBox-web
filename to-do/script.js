$(function(count){
	var list = $('.item').length;
	if (list != 0) 
		{
			$('#empty').css('display','none');
		};
});
	
$(document).ready(function(){
	listenToAddButton();
});
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
		/*listenToHideButton(); - пока не реализовал, но мысли были*/
	});
};

function listenToDelButton(){
$('.item-clear').click(function(){
	$(this).parents('.item').remove();
	$('#empty').css('display','block'); /*вообще это костыль, работает только если в списке был 1 элемент, см. ниже*/
	/*$(function(check){
		var list = $('.item').length;
		if (list == 0) 
			{
				$('#empty').css('display','block'); - или не блок, моежет run-in лучше
				(Устанавливает элемент как блочный или встроенный в зависимости от контекста.)
			};
	});	а вообще это не хочет работать, наверное выходной
	Да, валидацию не прописал, по идее форма не должна отправлять данные, если рекомендуемые к заполнению поля пустые, но она отправляет, аутло. Значит придется прописать*/
});
};