import {useState} from 'react';
import './App.css';
import pokemons from './pokemons.json';
import Pokemon from "./Pokemon";
import Paginacion from "./paginacion";
import axios from 'axios';


function App() {

  const getData = async () => {
    const resp = await axios.get('https://dog.ceo/api/breeds/list/all');
    console.log(resp.data);

  }

  const [firstPokemon, setFirstPokemon] = useState(0);
  const [lastPokemon, setLastPokemon] = useState(50);
  
  function changePokemons(page){
    setFirstPokemon(page*50);
    setLastPokemon((page+1)*50);
  }
  
  return (
    <div className='App'>
    <h1>Pokemons</h1>
    <button onClick={getData}>Api</button>
    <Paginacion
      page={0}
      totalPages={(pokemons.length/50).toFixed()}
      changePage={(page) => changePokemons(page)}
    />
    <br></br>
    <div>
    </div>
    <br></br>
    {pokemons.slice(firstPokemon, lastPokemon).map((pokemon) => <Pokemon base={pokemon.base?.Attack} defense={pokemon.base?.Defense} name={pokemon.name.english} image={pokemon.image.thumbnail} type={pokemon.type} />)}
    </div>
  );
}

export default App;
