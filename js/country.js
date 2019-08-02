var country = {
    name: '',
    code: '',
    flag: '',
    currency: '',
    population: '',
    area: '',
    weather: {},
    getCountry: function() {
        return jQuery.ajax({
            type: "get",
            url: 'https://restcountries.eu/rest/v2/alpha/' + this.code + '?fullText=true'
        });
    },
    getCapital: function() {
        return jQuery.ajax({
            type: "get",
            url: 'https://restcountries.eu/rest/v2/alpha/' + this.code + '?fields=capital;name',
            async: true
        });
    },
    getCurrency: function() {
        return jQuery.ajax({
            type: "get",
            url: 'https://restcountries.eu/rest/v2/alpha/' + this.code + '?fields=currencies',
            async: true
        });
    },
    getArea: function() {
        return jQuery.ajax({
            type: "get",
            url: 'https://restcountries.eu/rest/v2/alpha/' + this.code + '?fields=area',
            async: true
        });
    },
    getPopulation: function() {
        return jQuery.ajax({
            type: "get",
            url: 'https://restcountries.eu/rest/v2/alpha/' + this.code + '?fields=population',
            async: true
        });
    },
    getFlag: function() {
        return jQuery.ajax({
            type: "get",
            url: 'https://restcountries.eu/rest/v2/alpha/' + this.code + '?fields=flag',
            async: true
        });
    },
    getLanguages: function() {
        return jQuery.ajax({
            type: "get",
            url: 'https://restcountries.eu/rest/v2/alpha/' + this.code + '?fields=languages',
            async: true
        });
    },
    showModal: function() {
        // jQuery('#modal1').modal();
        // jQuery('#modal1').modal('open');  
        // jQuery('.carousel').carousel();
        // jQuery('.carousel.carousel-slider').carousel({fullWidth: true});
        // jQuery('#country-name').text(this.name);      
        // jQuery('#country-flag').attr('src', this.flag);
        // //jQuery('#weather-image').attr('src', 'http://openweathermap.org/img/wn/' + this.weather[0].icon + '@2x.png');
        
        // getCountryData(this.name);
    }

}
