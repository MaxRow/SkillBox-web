$(function(){
	$.get('http://data.fixer.io/api/latest',
		{'access_key':'b5209d1a262c7a93f05515f280f702f1','base':'EUR','symbols':'RUB,USD'},
		function(response){
			var a = response.rates.RUB;
			var b = response.rates.USD;
			var c = a/b;
			console.log('eur/rub = ' + response.rates.RUB);
			console.log('eur/usd = ' + response.rates.USD);
			console.log('usd/rub = ' + c);
			$('#euro').append(a);
			$('#usd').append(c);
		});
});