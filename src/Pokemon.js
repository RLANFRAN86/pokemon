import { useState } from "react";
import pokemons from './pokemons.json';


const Pokemon = (props) => {
const {pokemon} = props;

const [layer, setLayer] = useState(false);

const [total, setTotal] = useState(50)


    return(
    <div>
    <div className="Pokemon">
        
        <img classname="pokemon-img" src={props.image}
        alt={props.name}/>
        
        </div>
        <div className="cards">
        <h3>{props.id}</h3>
        <br></br>
        <h4>{props.name}</h4>
        <br></br>
        <h4>{props.type}</h4>
        </div>
        <br></br>
        <button onClick={()=> setLayer(!layer)}>Read More / Less</button>
        <h4 style={{display: layer? 'block' : 'none'}}><p>{props.base}</p>Ataque<p>{props.defense}</p>Defensa</h4>
        
    <br></br>
    <div>

    </div>
    </div>
)};

export default Pokemon;

