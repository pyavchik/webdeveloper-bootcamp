var request = require("request");

request('https://api.chucknorris.io/jokes/random', function (error, response, body) {
    if(!error && response.statusCode == 200) {
        var parsedDate = JSON.parse(body);
        console.log(parsedDate["value"]) // Show the HTML for the Google homepage.
    }
});
