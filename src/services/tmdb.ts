export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  genre_ids: number[];
  release_date: string;
}

export interface Credits {
  cast: {
    id: number;
    name: string;
    profile_path: string;
    character: string;
  }[];
}

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

if (!TMDB_API_KEY) {
  throw new Error("TMDB API key is not defined");
}

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const tmdb = {
  async getMovieDetails(id: string): Promise<Movie> {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`
    );
    return response.json();
  },

  async getMovieCredits(id: string): Promise<Credits> {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${TMDB_API_KEY}`
    );
    return response.json();
  },

  getImageUrl(path: string, size = "original") {
    return path ? `${IMAGE_BASE_URL}/${size}${path}` : "";
  },

  async getPopularMovies(
    page: number,
    filters?: {
      sort?: string;
      genres?: number[];
      year?: string;
      userScore?: [number, number];
      runtime?: [number, number];
    }
  ) {
    let url = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`;

    if (filters) {
      if (filters.sort) url += `&sort_by=${filters.sort}`;
      if (filters.genres?.length)
        url += `&with_genres=${filters.genres.join(",")}`;
      if (filters.year) url += `&year=${filters.year}`;
      if (filters.userScore)
        url += `&vote_average.gte=${filters.userScore[0]}&vote_average.lte=${filters.userScore[1]}`;
      if (filters.runtime)
        url += `&with_runtime.gte=${filters.runtime[0]}&with_runtime.lte=${filters.runtime[1]}`;
    }

    const response = await fetch(url);
    return response.json();
  },

  async getNowPlayingMovies(page: number) {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`
    );
    return response.json();
  },

  async getUpcomingMovies(page: number) {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&page=${page}`
    );
    return response.json();
  },

  async getTopRatedMovies(page: number) {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&page=${page}`
    );
    return response.json();
  },

  genres: {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  },

  getGenreName(id: number): string {
    return this.genres[id as keyof typeof this.genres] || "Unknown";
  },
};
