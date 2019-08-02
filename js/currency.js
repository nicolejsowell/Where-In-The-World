var apiKey = 'd7a838a989msh34298797289bd25p1df66djsn0b278833dc0e';
function getExchangeRate(symbol) {
    return jQuery.ajax({
        type: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("x-rapidapi-host", "currency-converter5.p.rapidapi.com");
            request.setRequestHeader("x-rapidapi-key", apiKey);
        }

    });
}
