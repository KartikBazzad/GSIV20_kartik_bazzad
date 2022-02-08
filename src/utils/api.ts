import axios from "axios";
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = process.env.REACT_APP_API_KEY;
export async function getLatestMoviesList(page: number) {
  return axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}&language=en-US`
  );
}

export async function getMovieDetails(id: string) {
  return axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,images,`
  );
}

export async function searchMovie(query: string, pageNumber: number) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${pageNumber}&include_adult=false`
  );
}
