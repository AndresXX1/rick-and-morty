import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "../Redux/actions";
import { connect } from "react-redux";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  deleteFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Verifica si el personaje está en la lista de favoritos al cargar el componente
  useEffect(() => {
    setIsFav(myFavorites.some((character) => character.id === id));
  }, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      deleteFav(id);
    } else {
      addFav({ id, name, status, species, gender, origin, image });
    }
    setIsFav(!isFav);
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleCardFlip}
    >
      <div className={styles.inner}>
        <div className={`${styles.front} ${isFlipped ? styles.hidden : ""}`}>
          {/* Contenido frontal de la tarjeta */}
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div className={`${styles.back} ${isFlipped ? "" : styles.hidden}`}>
          {/* Contenido trasero de la tarjeta */}
          <Link to={`/detail/${id}`}>
            <div className={styles.dataContainer}>
              <h2
                style={{
                  fontFamily: "'Pixelify Sans', cursive",
                  color: "#aaaaaa", // Gris claro para el título
                  borderBottom: "2px solid #333333", // Borde gris oscuro
                }}
              >
                Name: "{name}"
              </h2>
              <h4
                style={{
                  fontFamily: "'Pixelify Sans', cursive",
                  color: "#333333", // Gris oscuro para el texto
                  borderBottom: "2px solid #333333", // Borde gris oscuro
                }}
              >
                Status: "{status}"
              </h4>
              <h4
                style={{
                  fontFamily: "'Pixelify Sans', cursive",
                  color: "#333333", // Gris oscuro para el texto
                  borderBottom: "2px solid #333333", // Borde gris oscuro
                }}
              >
                Species: "{species}"
              </h4>
              <h4
                style={{
                  fontFamily: "'Pixelify Sans', cursive",
                  color: "#333333", // Gris oscuro para el texto
                  borderBottom: "2px solid #333333", // Borde gris oscuro
                }}
              >
                Gender: "{gender}"
              </h4>
              <h4
                style={{
                  fontFamily: "'Pixelify Sans', cursive",
                  color: "#333333", // Gris oscuro para el texto
                  borderBottom: "2px solid #333333", // Borde gris oscuro
                }}
              >
                Origin: "{origin}"
              </h4>
            </div>
          </Link>
          <div className={styles.buttonContainer}>
            <button className={styles.favorite} onClick={handleFavorite}>
              {isFav ? "❤️" : "🤍"}
            </button>
            <button className={styles.close} onClick={onClose}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    deleteFav: (id) => dispatch(deleteFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);