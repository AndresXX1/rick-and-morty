import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "../Redux/actions"; // Cambia "removeFav" a "deleteFav"
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, deleteFav, myFavorites }) => { // Cambia "removeFav" a "deleteFav"
  const [isFav, setFavs] = useState(false);

  const handleFavorite = () => {
    isFav ? deleteFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
    setFavs(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFavs(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={onClose}>X</button>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <Link to={`/detail/${id}`}>
        <div className={styles.dataContainer}>
          <h2>Name: "{name}"</h2>
          <h4>Status: "{status}"</h4>
          <h4>Species: "{species}"</h4>
          <h4>Gender: "{gender}"</h4>
          <h2>Origin: "{origin}"</h2>
          <h2>image: "{image}"</h2>
          <img className={styles.image} src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    deleteFav: (id) => dispatch(deleteFav(id)), // Cambia "removeFav" a "deleteFav"
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);