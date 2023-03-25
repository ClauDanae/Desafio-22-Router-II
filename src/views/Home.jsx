import { useState, useEffect } from 'react'

const Home = () => {
  const [mainImage, setMainImage] = useState("")
  useEffect(() => {
    ApiConsulta();
  }, [])

  const ApiConsulta = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const pikaData = await response.json();
    if (response && pikaData) {
      setMainImage(pikaData.sprites.other.dream_world.front_default)
    }
  }
  return (
    <div className="container">
      <h1 className="titleView"><b>Bienvenido/a</b></h1>
      <h2 className="titleView"><b>Maestro/a Pokémon</b></h2>
      <img className="mainImage" src={mainImage} alt="" />
    </div>
  )
}

export default Home