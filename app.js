jQuery.noConflict();
jQuery(function () {
  var $ = jQuery;

  $("#focus-single").click(function () {
    $("#map1").vectorMap("set", "focus", { region: "AU", animate: true });
  });
  $("#focus-multiple").click(function () {
    $("#map1").vectorMap("set", "focus", {
      regions: ["AU", "JP"],
      animate: true
    });
  });
  $("#focus-coords").click(function () {
    $("#map1").vectorMap("set", "focus", {
      scale: 7,
      lat: 35,
      lng: 33,
      animate: true
    });
  });
  $("#focus-init").click(function () {
    $("#map1").vectorMap("set", "focus", {
      scale: 1,
      x: 0.5,
      y: 0.5,
      animate: true
    });
  });

  $("#next").attr("disabled", false);
  $("#prev").attr("disabled", true);

  var cardGroup = 1;
  var rate = 0;
  function showCarousel(index) {
    cardGroup = index;

    showCardGroup(index);

    $(".modal").modal({
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
    });
    $(".modal").modal("open");
    // $("#modal1").show();
  }

  function showCardGroup(group) {
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();

    $("#next").attr("disabled", group === 3);
    $("#prev").attr("disabled", group === 1);

    if (group === 1) {
      $("#one").show();

      $("#country-flag").css("background-image", "");
      $("#icon").attr("src", "");
      $("#country-flag").attr("data-url", "");

      // adjustments
      if (country.name.indexOf("Korea (Democratic People") === 0) {
        country.name = "North Korea";
      } else if (country.name.indexOf("United Kingdom") === 0) {
        country.name = "United Kingdom";
      } else if (country.name.indexOf("Lao People") === 0) {
        country.name = "Lao";
      } else if (country.name.indexOf("Congo (Democratic Republic") === 0) {
        country.name = "Congo (Democratic Republic)";
      } else if (country.name.indexOf('Venezuela (Bolivarian') === 0) {
        country.name = 'Venezuela';
      }

      // first panel
      $("#country-name").text(country.name);
      $("#country-flag").css("background-image", "url(" + country.flag + ")");
      $("#country-flag").attr("data-name", country.name);
      $("#country-flag").attr("data-url", country.flag);

      // second panel
      // Capital Name
      $("#capital-name").text(country.capital);
      // capital picture
      $("#capital-pic").css(
        "background-image",
        "url(" + country.capitalImage + ")"
      );
      $("#capital-pic").attr("data-name", country.capital);
      $("#capital-pic").attr("data-url", country.capitalImage);

      // local time
      country.timezone = getCurrentTime(country.weather.timezone);
      var m = moment(country.timezone).format("dddd, MMMM Do YYYY, hh:mm a");
      $('#theTime').text(m);

    } else if (group === 2) {
      $("#two").show();

      // first panel
      $("#rate").css('left: 12%');
      $("#rate").text(
        "1 USD = " + country.rate.toFixed(2) + " " + country.currency
      );
      $("#currency-name").text("(" + country.currencyName + ")");

      // first panel
      $("#capital").text("Current conditions");
      console.log(country.weather.weather[0]);
      $("#icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
        country.weather.weather[0].icon +
        "@2x.png"
      );
      $("#conditions").text(country.weather.weather[0].description);
      $("#temp").text(Math.floor(country.weather.main.temp));
      $("#humidity").text("Humidity: " + country.weather.main.humidity + "%");
      $("#wind").text(
        "Wind: " +
        Math.floor(country.weather.wind.speed) +
        "mph " +
        degToCompass(country.weather.wind.deg)
      );
      
      if (typeof country.weather.visibility === "number") {
        $("#visibility").text(
          "Visibility: " + Math.floor(country.weather.visibility / 1000) + "mi"
        );
      } else if (typeof country.weather.visibility === 'string') {
        $("#visibility").text(
          "Visibility: " + country.weather.visibility + "mi"
        );
      } else if (country.weather.visibility === undefined) {
        $("#visibility").text(
          "Visibility: ---"
        );
      }
    } else if (group === 3) {
      $("#three").show();

      // first panel - attraction image
      $("#attraction-name").text(country.attractionImageName);
      $("#attraction-image").css(
        "background-image",
        "url(" + country.attractionImage + ")"
      );
      $("#attraction-image").attr("data-name", country.attractionImageName);
      $("#attraction-image").attr("data-url", country.attractionImage);

      // second panel
      $("#food-name").text(country.dish.name);
      $("#food-image").css(
        "background-image",
        "url(" + country.dish.image + ")"
      );
      $("#food-image").attr("data-name", country.dish.name);
      $("#food-image").attr("data-url", country.dish.image);
    }
  }

  $("#next").click(function (event) {
    event.preventDefault();

    cardGroup++;
    if (cardGroup > 3) {
      cardGroup = 3;
    }
    showCardGroup(cardGroup);
  });

  $("#prev").click(function (event) {
    event.preventDefault();
    cardGroup--;
    if (cardGroup === 0) {
      cardGroup = 1;
    }
    showCardGroup(cardGroup);
  });

  // full-screen modal
  var fullScreenModal = $("#modal-full-screen");
  var modalImage = $("#modal-full-screen-image");
  var modalImageCaption = $("#image-caption");

  $("#modal-full-screen-close").click(function (event) {
    event.preventDefault();
    // close full-screen modal
    fullScreenModal.hide();

    $(".modal").modal("open");
    //$("#modal1").show();
    $(".modal-overlay").show();

  });

  $(".img").click(function (event) {
    event.preventDefault();
    // show full-screen modal
    fullScreenModal.show();
    modalImage.attr("src", $(this).attr("data-url"));
    modalImageCaption.text($(this).attr("data-name"));

    $(".modal").modal("close");
    //$("#modal1").hide();
    $(".modal-overlay").hide();
  });

  // jsVectorMap
  $("#map1").vectorMap({
    map: "world_mill_en",
    panOnDrag: true,
    focusOn: {
      x: 0.5,
      y: 0.5,
      scale: 1,
      animate: true
    },
    onRegionClick: function (event, code) {
      var map = $("#map1").vectorMap("get", "mapObject");
      country.name = map.getRegionName(code);
      if (code === "_2") {
        code = "SO";
      } else if (code === "_1") {
        code = "XK";
      } else if (code === "_0") {
        code = "CY";
      }
      country.code = code;
      country
        .getCountry()
        .then(function (response) {
          console.log('country', response);
          country.capital = response.capital;
          country.name = response.name;
          country.flag = response.flag;
          country.languages = response.languages;
          country.currency = response.currencies[0].code;
          country.currencyName = response.currencies[0].name;
          country.currencySymbol = response.currencies[0].symbol;
          if (country.name.toLowerCase() === 'greenland') {
            country.latitude = response.latlng[1];
            country.longitude = response.latlng[0];
          }
          else {
            country.latitude = response.latlng[0];
            country.longitude = response.latlng[1];
          }
          country.population = response.population;
          country.area = response.area;
          country.nativeName = response.nativeName;
          country.region = response.region;
        })
        .then(function (response) {
          var capitalCity = country.capital;
          if (capitalCity.indexOf("Washington,") < 0) {
            if (capitalCity.indexOf(" ") >= 0) {
              capitalCity = capitalCity.replace(' ', '	%20');
            }
          }
          //
          // get capital image
          database_ref.once("value", function (snapshot) {
            for (obj in snapshot.val()) {
              if (snapshot.val()[obj].code === country.code) {
                country.capitalImage = snapshot.val()[obj].attraction.capital;
                country.attractionImage = snapshot.val()[
                  obj
                ].attraction.address;
                country.attractionImageName = snapshot.val()[
                  obj
                ].attraction.name;
                break;
              }
            }
            setTimeout(() => {
              showCarousel(1);
            }, 100);
          });

          getWeatherInfo(country.latitude, country.longitude)
            .then(function (data) {
              //console.log("weather", data);
              country.weather = data;              
            })
            .fail(function (err) {
              var errMsg =
                "Oops! Error while fetching weather information for " +
                country.capital +
                '\napi.openweathermap.org says "' +
                err.responseJSON.message +
                '"\nTry a different city!';
              alert(errMsg);
            });
        })
        .then(function (response) {
          // currency
          getExchangeRate(country.currency)
            .then(function (data) {
              country.rate = parseFloat(data);
              //console.log("rate", rate);
            })
            .then(function (response) {
              country.dish = getNationalDish(country.code);
              console.log("country.dish", country.dish);
            })
            .fail(function (err) {
              alert(err);
            });
        })
        .then(function (response) { });
    },
    series: {
      regions: [
        {
          scale: ["#C8EEFF", "#0071A4"],
          normalizeFunction: "polynomial",
          values: {
            AF: 16.63,
            AL: 11.58,
            DZ: 158.97,
            AO: 85.81,
            AG: 1.1,
            AR: 351.02,
            AM: 8.83,
            AU: 1219.72,
            AT: 366.26,
            AZ: 52.17,
            BS: 7.54,
            BH: 21.73,
            BD: 105.4,
            BB: 3.96,
            BY: 52.89,
            BE: 461.33,
            BZ: 1.43,
            BJ: 6.49,
            BT: 1.4,
            BO: 19.18,
            BA: 16.2,
            BW: 12.5,
            BR: 2023.53,
            BN: 11.96,
            BG: 44.84,
            BF: 8.67,
            BI: 1.47,
            KH: 11.36,
            CM: 21.88,
            CA: 1563.66,
            CV: 1.57,
            CF: 2.11,
            TD: 7.59,
            CL: 199.18,
            CN: 5745.13,
            CO: 283.11,
            KM: 0.56,
            CD: 12.6,
            CG: 11.88,
            CR: 35.02,
            CI: 22.38,
            HR: 59.92,
            CY: 22.75,
            CZ: 195.23,
            DK: 304.56,
            DJ: 1.14,
            DM: 0.38,
            DO: 50.87,
            EC: 61.49,
            EG: 216.83,
            SV: 21.8,
            GQ: 14.55,
            ER: 2.25,
            EE: 19.22,
            ET: 30.94,
            FJ: 3.15,
            FI: 231.98,
            FR: 2555.44,
            GA: 12.56,
            GM: 1.04,
            GE: 11.23,
            DE: 3305.9,
            GH: 18.06,
            GR: 305.01,
            GD: 0.65,
            GT: 40.77,
            GN: 4.34,
            GW: 0.83,
            GY: 2.2,
            HT: 6.5,
            HN: 15.34,
            HK: 226.49,
            HU: 132.28,
            IS: 12.77,
            IN: 1430.02,
            ID: 695.06,
            IR: 337.9,
            IQ: 84.14,
            IE: 204.14,
            IL: 201.25,
            IT: 2036.69,
            JM: 13.74,
            JP: 5390.9,
            JO: 27.13,
            KZ: 129.76,
            KE: 32.42,
            KI: 0.15,
            KR: 986.26,
            KW: 117.32,
            KG: 4.44,
            LA: 6.34,
            LV: 23.39,
            LB: 39.15,
            LS: 1.8,
            LR: 0.98,
            LY: 77.91,
            LT: 35.73,
            LU: 52.43,
            MK: 9.58,
            MG: 8.33,
            MW: 5.04,
            MY: 218.95,
            MV: 1.43,
            ML: 9.08,
            MT: 7.8,
            MR: 3.49,
            MU: 9.43,
            MX: 1004.04,
            MD: 5.36,
            MN: 5.81,
            ME: 3.88,
            MA: 91.7,
            MZ: 10.21,
            MM: 35.65,
            NA: 11.45,
            NP: 15.11,
            NL: 770.31,
            NZ: 138,
            NI: 6.38,
            NE: 5.6,
            NG: 206.66,
            NO: 413.51,
            OM: 53.78,
            PK: 174.79,
            PA: 27.2,
            PG: 8.81,
            PY: 17.17,
            PE: 153.55,
            PH: 189.06,
            PL: 438.88,
            PT: 223.7,
            QA: 126.52,
            RO: 158.39,
            RU: 1476.91,
            RW: 5.69,
            WS: 0.55,
            ST: 0.19,
            SA: 434.44,
            SN: 12.66,
            RS: 38.92,
            SC: 0.92,
            SL: 1.9,
            SG: 217.38,
            SK: 86.26,
            SI: 46.44,
            SB: 0.67,
            ZA: 354.41,
            ES: 1374.78,
            LK: 48.24,
            KN: 0.56,
            LC: 1,
            VC: 0.58,
            SD: 65.93,
            SR: 3.3,
            SZ: 3.17,
            SE: 444.59,
            CH: 522.44,
            SY: 59.63,
            TW: 426.98,
            TJ: 5.58,
            TZ: 22.43,
            TH: 312.61,
            TL: 0.62,
            TG: 3.07,
            TO: 0.3,
            TT: 21.2,
            TN: 43.86,
            TR: 729.05,
            TM: 0,
            UG: 17.12,
            UA: 136.56,
            AE: 239.65,
            GB: 2258.57,
            US: 14624.18,
            UY: 40.71,
            UZ: 37.72,
            VU: 0.72,
            VE: 285.21,
            VN: 101.99,
            YE: 30.02,
            ZM: 15.69,
            ZW: 5.57
          }
        }
      ]
    }
  });

  function initMap(response) {
    console.log(response);
  }

  function test() {
    $.ajax({
      type: "get",
      url: "https://restcountries.eu/rest/v2/all",
      success: function (response) {
        for (element in response) {
          if (
            response[element].name.length > "United States of America".length
          ) {
            console.log(response[element].name);
          }
        }
        //United States of America
      }
    });
  }

  function getCurrentTime(cityTz) {
    console.log('cityTz', cityTz);
    // current local time
    var date = new Date();
    var localTime = date.getTime();
    var localOffset = date.getTimezoneOffset() * 60000;
    var utcTime = localTime + localOffset;
    console.log('utcTime', utcTime);
    var cityTime = utcTime + (cityTz * 1000);
    console.log('cityTime', cityTime);
    var newDate = new Date(cityTime);

    return newDate.toLocaleString();
  }

});
