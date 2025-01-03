import axios from "../api/axios";
import requests from "../api/request";
import React, { useState, useEffect } from 'react';
import './Banner.css'
import styled from "styled-components";

export default function Banner() {
    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async () => {
        
        // 영화 정보 가져오기(여러개)
        const request = await axios.get(requests.fetchNowPlaying);
        // 영화중 랜덤하게 1개의 id 가져오기
        const movieId = 
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ].id;
        
        // 상세정보 가져오기
        const {data : movieDetail} = await axios.get(`movie/${movieId}`, {
            params: {append_to_response: "videos"}
        });
        setMovie(movieDetail);
        }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    if(!isClicked) {
        return (
            <header
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
            }}
            >
            <div className="banner__contents">
                {/* Title */}
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* Buttons */}
                <div className="banner__buttons">
                    <button 
                        className="banner__button play" 
                        onClick={() => {setIsClicked(true)}}>Play</button>
                    <button className="banner__button info">
                        <div className="space"></div> More Information
                    </button>
                </div>
                {/* Description */}
                <h1 className="banner__description">{truncate(movie?.overview, 100)}</h1>
            </div>
            <div className="banner--fadeBottom" />
            </header>
        );
    }  else {
        return (
            <Conatiner>
                <HomeContainer>
                    <iframe 
                        width="640" 
                        height="360" 
                        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen></iframe>
                </HomeContainer>
            </Conatiner>
        )
    }
}

const Conatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    height:100%;
`

const HomeContainer = styled.div`
    width:100%;
    height:100%;
`

const Iframe = styled.iframe`
    width:100%;
    height:100%;
    z-index:-1;
    opacity:0.65;
    border:none;

    &::after {
        content:"";
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
`