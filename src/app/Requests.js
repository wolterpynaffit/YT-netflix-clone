// Typically we would store the api key in {process.ev.API_KEY}
const API_KEY = '096bc391d7771398af6a6919d15acc37';


// because we've installed and created a axios.js with the base url, the api call will use the following request structure to essentially to "fill in the blank": The API call will ultimately look something like this: "https://api.themoviedb.org/3/trending/all/week?api_key=096bc391d7771398af6a6919d15acc37&with_genres=99" 

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;