import axios from "axios"

// instance means example or case

const instance  = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default instance;