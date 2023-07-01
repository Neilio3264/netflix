const requests = {
  Trending: "trending/all/week?language=en-US",
  NetflixOriginals:
    "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=8",
  TopRated: "movie/top_rated?language=en-US&page=1&region=US",
  ActionMovies:
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_genres=28&with_watch_providers=8",
  ComedyMovies:
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_genres=35&with_watch_providers=8",
  HorrorMovies:
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_genres=27&with_watch_providers=8",
  RomanceMovies:
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_genres=10749&with_watch_providers=8",
  Documentaries:
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_genres=99&with_watch_providers=8",
};

export default requests;
