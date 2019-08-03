
function getWeatherInfo(capital) {
    return jQuery.ajax({
        type: "get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + capital + "&appid=3950d18a26c81952f54e0003327fe8ed&units=imperial"

    });
}

