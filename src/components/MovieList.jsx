import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LargMovieCard from './LargMovieCard';
const screenWidth = window.innerWidth

function MovieList({ genreId,index_ }) {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null)
    useEffect(() => {
        getMovieByGenreId();
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(res => {
            console.log(res.data.results);
            setMovieList(res.data.results)
        })
    }
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }
    return (
        <div className='relative'>
            <HiChevronLeft className={`hidden md:block text-white text-5xl absolute mx-8 ${index_%3==0?'mt-[55px]':'mt-[150px]'} cursor-pointer z-10`}
             onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className={`hidden md:block text-white text-5xl absolute mx-8 ${index_%3==0?'mt-[55px]':'mt-[150px]'} cursor-pointer right-0 z-10`}
                onClick={() => sliderRight(elementRef.current)} />
            <div className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-10 ' ref={elementRef}>
                {movieList.map((item, index) => (
                    <>
                    {index_%3==0?<LargMovieCard movie={item} />:<MovieCard key={item.id} movie={item} /> }
                    </>
                ))}
            </div>

        </div>
    )
}

export default MovieList