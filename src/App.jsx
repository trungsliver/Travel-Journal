import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import Joke from './components/Joke'
import jokesData from './assets/jokesData'
import travelData from './assets/travelData'

export default function App() {
  const jokeElement = jokesData.map(joke => {
    return <Joke setup={joke.Setup} punchline={joke.Punchline} />
  });

  const travelElement = travelData.map(item => {
    return ( 
      <Entry
        key       = {item.id}
        // img       = {item.img}
        // title     = {item.title}
        // country   = {item.country}
        // date      = {item.date}
        // text      = {item.text}
        // mapsLink  = {item.mapsLink}

        // pass object as property
        // entry = {item}

        // pread object as props
        {...item}

      />)
  });

  return (
    <>
      <Header />

      <main>
        {travelElement}
      </main>

      {/* {jokeElement} */}
    </>
  )
}


