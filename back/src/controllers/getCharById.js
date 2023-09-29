
const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/";


async function getCharById (req, res){

    const { id } = req.params;

    try {
      const response = await axios.get(URL + id);
      const character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species
      }
      res.status(200).json(character)
    }
    catch (error){
      res.status(500).json(error.message);
    }
}
module.exports = {getCharById};
// const { response } = require("express");
// const axios = require("axios")

// const URL = "https://rickandmortyapi.com/api/character/";


// function getCharById (req, res){
// //localhost:3001/rickandmorty/onsearch/1
//   const { id } = req.params;
//   axios (URL + id).then (
//     (response) => {
//       const character = {
//         id: response.data.id,
//         name: response.data.name,
//         image: response.data.image,
//         gender: response.data.gender,
//         species: response.data.species
//       };
//       res.status(200).json(character);
//     }, (error) => res.status(500).json(error.message)
//     );
// }


// const axios = require("axios");
// const data = require("../utils/data");

// const getCharById = (res, id) => {
//   axios.get(`http://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         name: data.name,
//         image: data.image,
//         gender: data.gender,
//         species: data.species
//       };
//       res
//         .writeHead(200, { "content-Type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res
//         .writeHead(500, { "content-Type": "text/plain" })
//         .end(`Personaje con id ${id} no encontrado`);
//     });
// };

// module.exports = getCharById;