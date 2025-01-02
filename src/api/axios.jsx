import axios from "axios";

// 인스턴스화
// 반복되는 부분을 만들어놓는다.

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
        language: "ko-KR"
    }
})

export default instance;
