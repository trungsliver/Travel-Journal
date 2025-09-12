import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import Joke from './components/Joke'
import jokesData from './assets/jokesData'

export default function App() {
  const jokeElement = jokesData.map(joke => {
    return <Joke setup={joke.Setup} punchline={joke.Punchline} />
  })

  return (
    <>
      <Header />
      <main>
        <Entry
          img={
            {
              src: 'https://scrimba.com/links/travel-journal-japan-image-url',
              alt: 'Mount Fuji'
            }
          }
          title="Mount Fuji"
          country="JAPAN"
          date="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
          mapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        />

        <Entry
          img={
            {
              src: 'https://scrimba.com/links/travel-journal-australia-image-url ',
              alt: 'Mount Fuji'
            }
          }
          title="Mount Sydney Opera House"
          country="AUSTRALIA"
          date="27 May, 2023 - 8 Jun, 2023"
          text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
          mapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        />

        <Entry
          img={
            {
              src: 'https://scrimba.com/links/travel-journal-norway-image-url',
              alt: 'Mount Fuji'
            }
          }
          title="Geirangerfjord"
          country="NORWAY"
          date="01 Oct, 2024 - 18 Nov, 2024"
          text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
          mapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        />
      </main>

      {jokeElement}
    </>
  )
}


