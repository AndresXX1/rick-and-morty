import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Detail (props) {
  const {detailId} = useParams();
  const [character, setCharacter] = useState ({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch(() => {
        window.alert('Ocurrió un error al obtener los detalles del personaje');
      });

    return () => setCharacter({});
  }, [detailId]);

  return (
    <div>
        <Link to="/home">
            <button>Volver</button>
        </Link>
      <h1>Detail</h1>
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <img src={character.image} alt={character.name} />
      {character.origin && <h3>{character.origin.name}</h3>}
    </div>
  );
}