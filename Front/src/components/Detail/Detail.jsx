import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css"; // Importa los estilos

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/onsearch/${detailId}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch(() => {
        window.alert("Ocurrió un error al obtener los detalles del personaje");
      });

    return () => setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.detailContainer}>
      <Link to="/home" className={styles.link}>
        <button className={`${styles.button} ${styles.backButton}`}>Volver</button>
      </Link>
      <h1>Detalles de la carta</h1>
      <p>Nombre {character.name}</p>
      <p>Estado: {character.status}</p>
      <img src={character.image} alt={character.name} />
      {character.origin && <h3>{character.origin.name}</h3>}
    </div>
  );
}