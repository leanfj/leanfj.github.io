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


$.ajax({
	type: 'GET',
	url: 'https://wakatime.com/share/@leanfj/c1d85f01-7d19-4c1e-9f5c-99923217beb9.json',
	dataType: 'jsonp',
	success: function (response) {
		console.log(response.data);
		var ctx = document.getElementById('myChart').getContext('2d');
		var labels = [];
		var values = []
		response.data.forEach(function(element) {
			console.log(element.name);
			labels.push(element.name);			
			values.push(element.percent);			
		});
		var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'doughnut',
			
			// The data for our dataset
			data: {
				labels: labels,
				datasets: [{
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(80, 241, 129, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(80, 241, 129, 1)'
					],
					data: values,
				}]
			},
			
			// Configuration options go here
			options: {
				legend: {
					labels: {
							// This more specific font property overrides the global property
							fontColor: '#ffffff',
							defaultFontSize: '14'
					}
			}
			}
		});
	},
});

