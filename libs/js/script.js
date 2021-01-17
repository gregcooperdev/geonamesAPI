	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getChildren.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('#geonameId').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#results').html(result['data'][0]['name']);
					$('#results2').html(result['data'][1]['name']);
					$('#results3').html(result['data'][2]['name']);
					$('#results4').html(result['data'][3]['name']);
					$('#results5').html(result['data'][4]['name']);

				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		});
	});

	$('#btnRun2').click(function() {
		console.log('clicked');
		$.ajax({
			url: "libs/php/wikiSearch.php",
			type: 'POST',
			dataType: 'json',
			data: {
				q: $('#selCity').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#results').html("Summary: " + result['data'][0]['summary']);
					$('#results2').html("Source: " + result['data'][0]['wikipediaUrl']);
					$('#results3').html("");
					$('#results4').html("");
					$('#results5').html("");
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		});
	});

	$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/nearbyWeather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLat').val(),
				lng: $('#selLong').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#results').html(result['data']['temperature'] + " degrees Celcius");
					$('#results2').html(result['data']['windSpeed'] + " km/ph");
					$('#results3').html("Station Name: " + result['data']['stationName']);
					$('#results4').html("");
					$('#results5').html("");
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		});
	});
