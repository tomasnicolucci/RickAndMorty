import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { oneCharacter } from '../services/functions'
const Character = () => {

    const [character, setCharacter] = useState(null)

    const params = useParams()
    useEffect(() => {
        oneCharacter(params.id, setCharacter)
    }, [])
  return (
    <>
    {character !== null ? (
        <div>
            <h2>Personaje con el id {params.id}</h2>
            <p>Nombre: {character.name}</p>
            <img src={character.image} alt="" />
        </div>
    ): ('No hay personaje')}
    </>
  )
}

export default Character