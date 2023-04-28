import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
 const API_KEY = '8271722406e1.5b836459e80c3f4f56d9';

const Detail = () => {

const {id} = useParams();
const [character, setCharacter] = useState({})

useEffect(() => {
   axios(`http://localhost:3001/rickandmorty/onSearch/${id}`)
   // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(response => response.data)
    .then(( data ) => {
       if (data.name) {
          setCharacter(data);
       } else {
          alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name}/>
        </div>
    )
}
export default Detail;