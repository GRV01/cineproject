const key = import.meta.env.VITE_MOVIE_API

const requests = {
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestDiscover: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
};

export default requests;
