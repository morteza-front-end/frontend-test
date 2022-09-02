export default {
  baseUrl: "https://api.themoviedb.org/3/discover",
  detailMovie: "https://api.themoviedb.org/3/movie/",
  baseUrlImage: "https://image.tmdb.org/t/p/w500",
  creditsMovie: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
  getAllGenre: `https://api.themoviedb.org/3/genre/movie/list`,
};
