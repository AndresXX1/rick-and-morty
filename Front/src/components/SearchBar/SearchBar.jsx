import { useState } from "react";
import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
   
   const [character, setCharacter] = useState("");
   const handleChange = e => {
      const {value} = e.target;
      //console.log("Value: ", value)
      setCharacter(value)
   }
   
   return (
      <div className= {styles.dataContainer}>
         <input 
         type='search' 
         name="search"
         id="search"
         onChange={handleChange}
         />
         <button onClick={() => props.onSearch(character)}>Agregar</button> 
      </div>
   );
 }
// Este componente nos permitirá buscar y agregar nuevos personajes a nuestra aplicación.

// Recibe por props una función onSearch. La función onSearch se debe ejecutar cuando se haga click en el botón Agregar.