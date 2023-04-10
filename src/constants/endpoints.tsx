const base = import.meta.env.VITE_API_KEY as string;

const year = new Date().getFullYear().toString() as string;

export interface RequestType {
  [index: string]: string;
}

const requests: RequestType = {
  fetchTrending: `/trending/all/week?api_key=${base}&language=en-NG`,
  fetchTunedInOriginals: `/discover/movie?api_key=${base}&language=en-NG&sort_by=popularity_desc&year=${year}`,
  fetchTopRated: `/movie/top_rated?api_key=${base}&language=en-NG`,
  fetchActionMovies: `/discover/movie?api_key=${base}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${base}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${base}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${base}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${base}&with_genres=99`,
  fetchNowPlaying: `/movie/now_playing?api_key=${base}&language=en-NG`,
  fetchDrama: `/discover/movie?api_key=${base}&with_genres=18`,
};

export default requests;
