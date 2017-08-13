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
