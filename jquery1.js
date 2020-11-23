//Home page slider - about info
$(document).ready(function(){
    $("#paneltitle").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

//Home Page geolocation
var geo = document.getElementById("geolocation");
function getPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    geo.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  geo.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
