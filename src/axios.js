import axios from 'axios'

// here we are initializing axios
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;
// whenever we make a request we can append the beginning URL: example it eliminates the need to repeat www.google.com...
