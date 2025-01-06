const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM0ZjlmNmNmNWRmYjMxOWMyYjViMjkzNmUyYjUxNiIsIm5iZiI6MTcyMDc4MjYxNC44OTQsInN1YiI6IjY2OTEwZjE2ZDhmYmY4ODQ0ZmQxNzc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNdNXqcT7MBjST6k-_6ccajxm2sMzee3XlHWgKl_LKM",
};

export const tmdb = {
  async getMovieDetails(id: string) {
    const response = await fetch(`${BASE_URL}/movie/${id}`, { headers });
    return response.json();
  },

  async getMovieCredits(id: string) {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits`, {
      headers,
    });
    return response.json();
  },

  async getPopularMovies(page = 1) {
    const response = await fetch(`${BASE_URL}/movie/popular?page=${page}`, {
      headers,
    });
    return response.json();
  },

  async getNowPlayingMovies(page = 1) {
    const response = await fetch(`${BASE_URL}/movie/now_playing?page=${page}`, {
      headers,
    });
    return response.json();
  },

  async getUpcomingMovies(page = 1) {
    const response = await fetch(`${BASE_URL}/movie/upcoming?page=${page}`, {
      headers,
    });
    return response.json();
  },

  async getTopRatedMovies(page = 1) {
    const response = await fetch(`${BASE_URL}/movie/top_rated?page=${page}`, {
      headers,
    });
    return response.json();
  },

  getImageUrl(path: string, size = "w220_and_h330_face") {
    if (!path) return "";
    return `${IMAGE_BASE_URL}/${size}${path}`;
  },

  async getMovieTrailer(id: string) {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos`, { headers });
    const data = await response.json();
    return data.results[0];
  },
};
