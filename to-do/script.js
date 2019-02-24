$(function(){
	$('#add-button').click(function(){
		var newElement = $('<li class="item">');
		newElement.text('');
		$('ul').prepend(newElement);
	});
});