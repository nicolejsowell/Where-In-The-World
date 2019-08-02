
function getWeatherInfo(capital) {
    return jQuery.ajax({
        type: "get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + capital + "&appid=3950d18a26c81952f54e0003327fe8ed&units=imperial"

    });
}

 var date = new Date(sec * 1000); {
   var timestr = date.toLocaleTimeString();
   console.log(date, timestr);
 }

 function description(d) {
    var description = d.weather[0].description;
    document.getElementById('description').innerHTML = description;
     document.getElementById('temp').innerHTML = celcius + '&deg;';
     document.getElementById('location').innerHTML = d.name;
     
     if( description.indexOf('rain') > 0 ) {
       document.body.className = 'rainy';
   } else if( description.indexOf('cloud') > 0 ) {
       document.body.className = 'cloudy';
   } else if( description.indexOf('sunny') > 0 ) {
       document.body.className = 'sunny';
   }
}

