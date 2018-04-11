// SLOW SCROLL
$('[href*="#"]').click(function() {
	var target = $(this.hash);
	$('html, body').animate({
		scrollTop: target.offset().top
	}, 1000);
});

$('[href*="#"]').click(function () {
	if ($('[href*="#"]').hasClass('ativo')) {
		$('[href*="#"]').removeClass('ativo');
	}
	$(this).addClass('ativo');
});


// wakatime code

var campoWakatime = $('#wakatime');

$.ajax({
	type: 'GET',
	url: 'https://wakatime.com/share/@leanfj/c1d85f01-7d19-4c1e-9f5c-99923217beb9.json',
	dataType: 'jsonp',
	success: function (response) {
		console.log(response.data);
		
	},
});