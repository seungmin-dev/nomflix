import axios from "axios"; // configure api stuff
// fetch 로 api 끌어오는 것보다 훨씬 나은 방법

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        "api_key" : "14754f6777692014937322454e829a50",
        language : "en_US"
    }
});

export const moviesApi = {
    nowPlaying : () => api.get("movie/now_playing"),
    upcoming : () => api.get("movie/upcoming"),
    popular : () => api.get("movie/popular"),
    movieDetail : (id) => api.get(`movie/${id}`, {
        params : {
            append_to_response : "videos"
        }
    }),
    search : (term) => api.get('search/movie', {
        params : {
            query : encodeURIComponent(term)
        }
    })
}

export const tvApi = {
    topRated : () => api.get("tv/top_rated"),
    popular : () => api.get("tv/popular"),
    airingToday : () => api.get("tv/airing_today"),
    showDetail : (id) => api.get(`tv/${id}`, {
        params : {
            append_to_response : "videos"
        }
    }),
    search : (term) => api.get('search/tv', {
        params : {
            query : encodeURIComponent(term)
        }
    })
}