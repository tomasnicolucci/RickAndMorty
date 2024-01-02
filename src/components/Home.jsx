import React, {useEffect, useState} from 'react'
import { allCharacters } from '../services/functions'

const Home = () => {
  const [characters, setCharacters] = useState(null)
  useEffect(() => {
    allCharacters(setCharacters)
  }, []);

  return (
    <>
        {characters !== null ? (
            characters.map(c => (
                <div key={c.id}>
                    <a href={`/character/${c.id}`}>{c.name}</a>
                    <img src={c.image} alt="" />
                </div>
            ))
        ) : ('No hay personajes')}
    </>
  )
}

export default Home