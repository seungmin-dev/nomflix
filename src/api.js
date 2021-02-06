import axios from "axios"; // configure api stuff
// fetch 로 api 끌어오는 것보다 훨씬 나은 방법

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        "api_key" : "14754f6777692014937322454e829a50",
        language : "en_US"
    }
});
api.get("tv/popular"); 
// tv 앞 '/'로 시작 = 절대경로 = baseURL 을 덮어씀
// '/'빼고 써야 상대경로

export default api;