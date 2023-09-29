import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar(props) {
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);

  const handleClickAbout = () => {
    setShowBackgroundImage(true);
  };

  const handleClickHome = () => {
    setShowBackgroundImage(false);
  };

  const handleClickFavorites = () => {
    setShowBackgroundImage(false);
  }

  const backgroundImageStyle = {
    backgroundImage: "url('https://media2.giphy.com/media/zPlGxzu027rEELiCFr/200.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <div className={styles.dataContainer}>
    <NavLink to="/about">
      <button onClick={handleClickAbout}>About</button>
    </NavLink>
    <NavLink to="/home">
      <button onClick={handleClickHome}>Home</button>
    </NavLink>
    <NavLink to="/favorites">
      <button onClick={handleClickFavorites}>Favorites</button>
    </NavLink>
    <sr />
    <SearchBar onSearch={props.onSearch} />
    {showBackgroundImage && (
      <div style={backgroundImageStyle}>
        <div className={styles.textContainer}>
          <h1>Tu texto aquí</h1>
          <p>Puedes añadir más contenido de texto</p>
        </div>
      </div>
    )}
  </div>
 );
}