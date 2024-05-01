import React from 'react'
import GenrasList from '../constant/GenrasList'
import MovieList from './MovieList'


function GenreMovieList() {
  return (
    <div className='container mx-auto'>
        {
            GenrasList.genres.map((item,index)=>index<=4&& (
                <div key={item.id} className='p-8 px-8'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MovieList genreId = {item.id} index_={index}/>
                </div>
            ))
        }
    </div>
  )
}

export default GenreMovieList