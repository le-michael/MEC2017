$( document ).ready(function() {
    var mymap = L.map('mapid').setView([43.107937, -79.890081], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoiZGFyaWdhbjE3IiwiYSI6ImNqOTF4a2ZpODNmdXYycXA2Zjg4cTd5djgifQ.2sbMPlwaZmtiOjfWYNG86Q'
    }).addTo(mymap);
    $.getJSON('./Data/mapdata.json', function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
        L.circle(val, {radius: 50, color: 'blue'}).addTo(mymap).bindPopup(key);
        });
    });
    L.circle([43.116823, -79.914244], {radius: 50, color: 'red'}).addTo(mymap).bindPopup("Sally's Potato Farm");
     // end of document ready
    (jQuery);
	
	console.log(Math.PI);
	var pos = [[43.116823, -79.914244, 0, 0]];

	function getWeather(lat,lon){
		$.ajax({
			url : 'http://samples.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=b1b15e88fa797225412429c1c50c122a1',
			type : "GET",
			async: false,
			dataType : "json",
			success : function(data) {
				wind = data.wind;
			}
		});
	}
	function path(){
		var dispLat = 0;
		var dispLon = 0;
		for (i  = 0; i<10; i++){
			getWeather(pos[i][0],pos[i][1]);		
			lat = wind.speed*Math.cos(wind.deg/180.0*Math.PI)/1000.0;
			lon = wind.speed*Math.sin(wind.deg/180.0*Math.PI)/1000.0; 
			n = -lon/lat;
			dispLat += 0.35*n* lon;
			dispLon += 0.35*lat/n;
			lat += pos[i][0];
			lon += pos[i][1];
			
			pos.push([lat,lon, dispLat, dispLon]);
		}
		var popup = L.popup()
		.setLatLng([pos[0][0],pos[0][1]])
		.setContent('<p>Wind Speed: 43.12mph<br />Angle: 311 Degrees</p>')
		.openOn(mymap);

		return pos;
	}
	pos = path();
	var latlngs = [];
	for(i = 0; i<pos.length; i++){
		latlngs.push([pos[i][0]- pos[i][2],pos[i][1] - pos[i][3]]);
	}
	for(i = pos.length-1; i>-1; i--){
		latlngs.push([pos[i][0]+ pos[i][2],pos[i][1] + pos[i][3]]);
	}
	console.log(latlngs);
	var polygon = L.polygon(latlngs, {color: 'red'}).addTo(mymap);
	// zoom the map to the polygon
	mymap.fitBounds(polygon.getBounds());

	
});


