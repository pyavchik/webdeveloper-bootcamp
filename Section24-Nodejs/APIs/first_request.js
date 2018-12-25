var request = require("request");

request('https://api.chucknorris.io/jokes/random', function (error, response, body) {
    if(!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
    }
});
