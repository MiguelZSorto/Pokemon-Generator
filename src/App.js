import React from 'react'
import './App.css'
import TitleBar from './components/TitleBar'
import GetPokemonButton from './components/GetPokemonButton'
// import PokemonInfoList from './components/PokemonInfoList'

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <GetPokemonButton></GetPokemonButton>
    </div>
  )
}

export default App
