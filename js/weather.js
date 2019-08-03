
function getWeatherInfo(capital) {
    return jQuery.ajax({
        type: "get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + capital + "&appid=3950d18a26c81952f54e0003327fe8ed&units=imperial"

    });
}

function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];

}
