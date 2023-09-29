const express = require('express');
const server = express();
const morgan = require('morgan');
const PORT = 3001;
const router = require("../src/routes/index")
const cors = require("cors")

server.use(express.json());
server.use(cors()); // da accesi a cualquier ruta del front para midificar el back
server.use(morgan("dev"));
server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log("Server raised in port: " + PORT);
});


// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail");
// const PORT = 3001;

// http.createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");// esta linea de codigo da acceso a cualquier ruta del front para poder modificar el back, si no queremos q suceda supongo q le sacamos el "*"
  
//     if(req.url.includes("onsearch")){
//         const id =req.url.split("/").pop();
//         getCharById(res, id);
//     }    
//     if(req.url.includes("detail")){
//         getCharDetail(res, id)
//     }
// })
// .listen(PORT, "localhost")