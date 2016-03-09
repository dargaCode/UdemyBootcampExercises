var movies = [
  {
    title: "The Life Aquatic",
    hasWatched: true,
    rating: 3
  },
  {
    title: "Lincoln",
    hasWatched: false,
    rating: 4.5
  },
  {
    title: "The Princess Bride",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Beerfest",
    hasWatched: true,
    rating: 4
  }
]

function buildString(movie) {
  var titleText = '"' + movie.title + '"';
  var watchedText = "Not watcAhed";
  var ratingText = movie.rating + " stars"

  if (movie.hasWatched) {
    watchedText = "Watched";
  }
  return titleText + " - " + watchedText + " - " + ratingText;
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
})
