$(document).ready(function() {

    //Get location
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long= pos.coords.longitude;
        weather(lat, long);
    }

    function error(){
        console.log("error");
    }

    function weather(lat, long) {

        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data){
            updateDom(data);
    });
   }

   function updateDom(data) {

    var city = data.name;
    var temp = Math.round(data.main.temp);
    var description = data.weather[0].description;
    var icon = data.weather[0].icon;

    $("#city").html(city);
    $("#temp").html(temp);
    $("#description").html(description);
    $("#icon").attr("src", icon);
   }
});


//Open Weather Map API
//"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={301379e5655a01afa94af524760af7f7}"
