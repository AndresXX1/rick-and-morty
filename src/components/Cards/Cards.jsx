import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   // primer paso recibir la propiedad characters mediante las props // que es un array con todos los personajes
   // characters = [{---}, {---}, {---}] es un arreglo que contien objetos, esos objetos son los personajes
   // osea que props vale todo eso..
   //props = {characters: [{...}, {...}, {...}]}
   return(
    <div style={{display:"flex", justifyContent: "space-between"}}>
      {characters && characters.length > 0 && characters.map((character) => (
  <Card
    key={character.id}
    id={character.id}
    name={character.name}
    status={character.status}
    species={character.species}
    gender={character.gender}
    origin={character.origin.name}
    image={character.image}
    onClose={() => props.onClose(character.id)}
         
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