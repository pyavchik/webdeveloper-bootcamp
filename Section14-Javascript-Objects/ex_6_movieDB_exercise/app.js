let movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    },
];


function buildString(movie) {
    let resultString = "You have ";

    if (movie.hasWatched) {
        resultString = resultString + "watched ";
    } else {
        resultString = resultString + "not seen ";
    }
    resultString += "\"" + movie.title + "\"" + " - " + movie.rating + " stars";
    return resultString;
}

movies.forEach(function (movie) {
    console.log(buildString(movie));

});
