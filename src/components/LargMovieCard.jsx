import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function LargMovieCard({ movie }) {
    return (
        <section className='hover:scale-110 transition-all duration-150'>
            <img src={IMAGE_BASE_URL + movie.backdrop_path} alt=""
                className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] cursor-pointer border-gray-400
        '/>
            <h2 className='w-[110px] md:w-[200px] text-white mt-2'>{movie.title}</h2>
        </section>
    )
}

export default LargMovieCard