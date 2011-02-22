/* Author:
   Rob Fletcher
*/

$(document).ready(function() {
	
	var lat = $('#contact .geo .latitude').text();
	var lng = $('#contact .geo .longitude').text();
	var mapCanvas = $("#map .map-canvas");
	
	mapCanvas.height(mapCanvas.width());
	
	var latlng = new google.maps.LatLng(lat, lng);
    var map = new google.maps.Map(mapCanvas[0], {
		zoom: 13,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    });

	var marker = new google.maps.Marker({
		position: latlng, 
		map: map,
		animation: google.maps.Animation.DROP,
		title: $('#contact .org').text()
	});
	
	var infowindow = new google.maps.InfoWindow({
		content: $('#contact').html()
	});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
	
	$('body').addClass('ready');
});





















