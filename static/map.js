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
});
