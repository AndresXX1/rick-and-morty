import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css"; // Importa el archivo CSS para aplicar estilos

const Favorites = ({ myFavorites }) => {
  return (
    <div className={styles["favorites-container"]}>
      {myFavorites.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={character.onClose}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);