import axios from "axios";

// 인스턴스화
// 반복되는 부분을 만들어놓는다.

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
        language: "ko-KR"
    }
})

console.log('Base URL:', instance.defaults.baseURL);
console.log('API Key:', import.meta.env.VITE_MOVIE_DB_API_KEY);

export default instance;
