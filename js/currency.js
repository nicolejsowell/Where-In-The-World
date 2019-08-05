var apiKey = '67f9e743abmsh41c0198451da1d0p10e88fjsn2079237f2fd3';
function getExchangeRate(symbol) {
    
    return jQuery.ajax({
        type: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("x-rapidapi-host", "currency-exchange.p.rapidapi.com");
            request.setRequestHeader("x-rapidapi-key", apiKey);
        },
        url: "https://currency-exchange.p.rapidapi.com/exchange",
        data: {
            "format": "json",
            "from": "USD",
            "to": symbol,
            "q": "1"
        }

    });
}