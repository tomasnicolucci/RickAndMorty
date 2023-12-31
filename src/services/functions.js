import axios from 'axios';

const allCharacters = async (state) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character');
    state(peticion.data.results);
}

const oneCharacter = async (id, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
}

export {allCharacters, oneCharacter}