import React,{useState} from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';


export default function Card(props) {

    

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>

<button onClick={props.onClose}>X</button>
        <div>
        <button onClick={handleFavoriteClick}
        >{isFavorite ? '❤️' : '🤍'}
        </button> 
        </div>
         </div>
         <Link to={`/detail/${props.id}`}>
        <div className={styles.dataContainer}>         
         <h2>{props.name}</h2>
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h2>{props.origin}</h2>
         <img className={styles.image} src={props.image} alt={props.name} />
         </div>
         </Link>

        </div>

      
      
         
         
   );
}
// alt en img es una propiedad alterna que se ejecuta si no llega la imagen
//todo esto esta dentro de props = {}
// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.
// Además, cuando el usuario haga click en la X de "cerrar", debe ejecutarse una función que también viene como props llamada onClose