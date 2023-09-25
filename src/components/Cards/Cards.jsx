import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   // primer paso recibir la propiedad characters mediante las props // que es un array con todos los personajes
   // characters = [{---}, {---}, {---}] es un arreglo que contien objetos, esos objetos son los personajes
   // osea que props vale todo eso..
   //props = {characters: [{...}, {...}, {...}]}
   return(
    <div style={{display:"flex", justifyContent: "space-between"}}>
      {characters.map(character => (
         <Card // por cada uno de ellos renderizar un componente card, para cada uno de los elementos del array
         // como characters es un array usamos.map y usamos una iife para pasarle todas las propiedades de cada elemento del array
         id={character.id}
         key= {character.id} // le agrege una propiedad llamada key que es igual al id de cada elemento del array
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image= {character.image}
         onClose={() => props.onClose(character.id)}
         isFavorite={character.isFavorite}
         />

      ))}
   </div>
   )
}



// Lo primero que debes hacer es recibir la propiedad characters mediante las props. 
// Esta propiedad es una arreglo con todos tus personajes.
//  Por cada uno de ellos deberás renderizar un componente Card pasándole todas las propiedades que ya mencionamos en el ejercicio anterior.

// [NOTA]: agrega una propiedad llamada key y que sea igual al ID del personaje.

// [NOTA]: puedes guiarte con la documentación de React para realizar este ejercicio