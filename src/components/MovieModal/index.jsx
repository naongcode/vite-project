import React, { useRef } from 'react'
import "./MovieModal.css"
import useOnClickOutside from '../../Hooks/useOnClickOutside';

export default function MovieModal({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen,
}) {
    const ref = useRef();
    useOnClickOutside(ref, () =>{setModalOpen(false)});

    return (
        // 모달(상태, 이미지, 내용(release/first, title/name, 평점, 오버뷰뷰))
        <div className='presentation'>
            <div className='wrapper-modal'>
                <div className='modal' ref={ref}>
                    <span onClick={() => setModalOpen(false)}
                        className='modal-close'>x</span>

                    <img className='modal__poster-img'
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt="modal__poster-img"/>
                    <div className='modal__content'>
                        <p className="modal__details">
                            <span className="modal__user_perc">100% for you</span>{" "}
                            {release_date ? release_date : first_air_date}
                        </p>

                        <h2 className="modal__title">{title ? title : name}</h2>
                        <p className="modal__overview"> 평점: {vote_average}</p>
                        <p className="modal__overview"> {overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }
