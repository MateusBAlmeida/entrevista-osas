// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import api from './api/api'

interface Root {
  films: string,
  people: string,
  planets: string,
  species: string,
  starships: string,
  vehicles: string,
}

interface People {
  name: string,
  birth_year: string,
  eye_color: string,
  gender: string,
  hair_color: string,
  height: string,
  mass: string,
  skin_color: string,
  homeword: string,
  films: Films[],
  species: Species[],
  starships: Starships[],
  vehicles: Vehicles[],
  url: string,
  created: string,
  edited: string,
}

interface Films {
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  species: Species[],
  starships: Starships[],
  vehicles: Vehicles[],
  characters: People[],
  planets: Planets[],
  url: string,
  created: string,
  edited: string,
}

interface Starships {
  name: string,
  model: string,
  starship_class: string,
  manufacturer: string,
  cost_in_credits: string,
  length: string,
  crew: string,
  passengers: string,
  max_atmosphering_speed: string,
  hyperdrive_rating: string,
  MGLT: string,
  cargo_capacity: string,
  consumables: string,
  films: Films[],
  pilots: People[],
  url: string,
  created: string,
  edited: string
}

interface Vehicles {
  name: string,
  model: string,
  vehicle_class: string,
  manufacturer: string,
  length: string,
  cost_in_credits: string,
  crew: string,
  passengers: string,
  max_atmosphering_speed: string,
  cargo_capacity: string,
  consumables: string,
  films: Films[],
  pilots: People[],
  url: string,
  created: string,
  edited: string
}

interface Species {
  name: string,
  classification: string,
  designation: string,
  average_height: string,
  average_lifespan: string,
  eye_colors: string,
  hair_colors: string,
  skin_colors: string,
  language: string,
  homeworld: string,
  people: People[],
  films: Films[],
  url: string,
  created: string,
  edited: string,
}

interface Planets {
  name: string,
  diameter: string,
  rotation_period: string,
  orbital_period: string,
  gravity: string,
  population: string,
  climate: string,
  terrain: string,
  surface_water: string,
  residents: People[],
  films: Films[],
  url: string,
  created: string,
  edited: string,
}

async function App() {
  const response = await api.get('/')

  console.log(response.data)
  // const categories: Root = response.data

  return (
    <div>
      <h1>Teste</h1>
      <div>
        
      </div>
    </div>
  )
}

export default App
