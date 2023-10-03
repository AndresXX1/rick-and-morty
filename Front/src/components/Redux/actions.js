import axios from "axios";

export function addFav(char) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/rickandmorty/favs", char);
      dispatch({
        type: "ADD_FAV",
        payload: char, // Cambia payload a char, ya que no necesitas una respuesta de la solicitud POST
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
}

export const deleteFav = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`);
      dispatch({
        type: "REMOVE_FAV",
        payload: id, // Cambia payload a id para eliminar el personaje por ID
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
}

export const getFavs = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/rickandmorty/favs`);
      dispatch({
        type: "GET_FAVS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
}

