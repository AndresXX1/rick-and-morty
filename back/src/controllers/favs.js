const favs = require("../utils/favs");


function postFav (req, res) {
    favs.push(req.body);
    res.status(201).json(favs);
}

function getFavs(req, res){
    res.status(200).json(favs);
}

function deleteFav(req, res) {
    const { id } = req.params;
    const index = favs.findIndex((character) => character.id === Number(id));

    if (index !== -1) {
        favs.splice(index, 1);
        res.status(200).json(favs);
    } else {
        res.status(404).json({ error: 'Personaje favorito no encontrado' });
    }


}

module.exports = {postFav, getFavs, deleteFav}