import { useState } from 'react'
import './App.css'
import { Header, MovieList } from './components'

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <div>
        <Header favorites={favorites} />
        <MovieList favorites={favorites} setFavorites={setFavorites} />
      </div>
    </>
  )
}

export default App
