$( document ).ready(function() {
    var mymap = L.map('mapid').setView([43.107937, -79.890081], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoiZGFyaWdhbjE3IiwiYSI6ImNqOTF4a2ZpODNmdXYycXA2Zjg4cTd5djgifQ.2sbMPlwaZmtiOjfWYNG86Q'
    }).addTo(mymap);
});
