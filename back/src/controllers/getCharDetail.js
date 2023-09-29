const axios = require("axios");
const https = require("https");

const URL = "https://rickandmortyapi.com/api/character/";

// Configura un agente HTTPS con opciones personalizadas (ajústalo según tus necesidades)
const agent = new https.Agent({
  rejectUnauthorized: false, // Solo para desarrollo, no se recomienda en producción
  // Especifica la versión de TLS (por ejemplo, TLSv1.2)
  minVersion: "TLSv1.2",
});

async function getCharDetail(req, res) {
  const { detailId } = req.params;
  try {
    const response = await axios.get(URL + detailId, { httpsAgent: agent });
    const character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species,
      status: response.data.status,
      origin:{
        name: response.data.origin || "" //cadena vacía como valor predeterminado si origin no está definido
      },
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = { getCharDetail };
//   axios(URL + detailId).then(
//     (response) => {
//       const character = {
//         id: response.data.id,
//         name: response.data.name,
//         image: response.data.image,
//         gender: response.data.gender,
//         species: response.data.species,
//         status: response.data.status,
//         origin: response.data.origin && response.data.origin.name ? response.data.origin.name : ""
//       };
//       res.status(200).json(character);
//     },
//     (error) => res.status(500).json(error.message)
//   );


// const axios = require("axios");
// const data = require("../utils/data");

// const getCharDetail = (res, id) => {
//   axios.get(`http://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         name: data.name,
//         image: data.image,
//         gender: data.gender,
//         species: data.species,
//         status: data.status,
//         origin: data.origin?.name
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

// module.exports = getCharDetail;