import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "50b6adc5e66a2375cbd8189fbba26e37";

const movieByGenraBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=50b6adc5e66a2375cbd8189fbba26e37"

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
    const  getMovieByGenreId=(id)=>axios.get(movieByGenraBaseUrl+"&with_genres="+id);
export default { 
    getTrendingVideos,
    getMovieByGenreId
}
