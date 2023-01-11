import React, { Component } from 'react'
import Movie from './Movie'

// fake data endpoint from our movie API
const movies = [
  {
    title: 'The Fellowship of the Ring',
    hours: 2,
    minutes: 58
  },
  {
    title: 'The Two Towers',
    hours: 2,
    minutes: 59
  },
  {
    title: 'Return of the King',
    hours: 3,
    minutes: 21
  },
  {
    title: 'The Hobbit: An Unexpected Journey',
    hours: 2,
    minutes: 49
  }
]

export default class App extends Component {
  render() {
    // map the array of movies to movie components
    // const movieComponents = movies.map((movie, idx) => {
    //   return (
    //     <Movie 
    //       title={movie.title}
    //       hours={movie.hours}
    //       minutes={movie.minutes}
    //       key={`movie-${idx}`}
    //     />
    //   )
    // })

    // this array will be rendered
    const movieArray = []
    movies.forEach((movie, idx) => {
     movieArray.push(
        <Movie 
          title={movie.title}
          hours={movie.hours}
          minutes={movie.minutes}
          key={`movie-${idx}`}
        />
      )
    })



    return (
      <>
        <h1>Lord of the Props</h1>

        {movieArray}
      </>
    )
  }
}