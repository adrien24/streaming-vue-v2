import axios from 'axios'

export const http = axios.create({
    baseURL: `https://uptobox.com/api/user`,

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export const tmdb = axios.create({
    baseURL: `https://api.themoviedb.org/3/search/`,

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

