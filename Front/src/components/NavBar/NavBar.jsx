import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

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
  };

  const backgroundImageStyle = {
    backgroundImage: "url('https://media2.giphy.com/media/zPlGxzu027rEELiCFr/200.gif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.searchContainer}>
        <SearchBar onSearch={props.onSearch} />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <NavLink to="/about">
            <button className={styles.button} onClick={handleClickAbout}>
              About
            </button>
          </NavLink>
        </div>
        <div className={styles.buttonWrapper}>
          <NavLink to="/home">
            <button className={styles.button} onClick={handleClickHome}>
              Home
            </button>
          </NavLink>
        </div>
        <div className={styles.buttonWrapper}>
          <NavLink to="/favorites">
            <button className={styles.button} onClick={handleClickFavorites}>
              Favorites
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}