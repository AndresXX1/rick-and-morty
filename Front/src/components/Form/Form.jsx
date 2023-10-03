import React, { useState } from "react";
import validation from "./Validation.js";
import styles from "./Form.module.css"; // Cambia la ruta a los estilos CSS de Form

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [isFieldsValid, setIsFieldsValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validationErrors = validation({ ...userData, [name]: value });

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    setErrors(validationErrors);

    setIsFieldsValid(Object.values(validationErrors).every((error) => !error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(userData);
  };

  return (
    <div className={styles.dataContainer}>
      <img
        src="https://partner.redbubble.com/partnership-portal/client/eab637076b22c782edf0015a0ec3c686.png" // Reemplaza con la ruta de tu imagen
        alt="Imagen"
        className={styles.image}
      />

      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className={
            userData.username && errors.username ? styles.error : styles.valid
          }
        />
        {userData.username && errors.username && (
          <p className={styles.error}>{errors.username}</p>
        )}
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className={
            userData.password && errors.password ? styles.error : styles.valid
          }
        />
        {userData.password && errors.password && (
          <p className={styles.error}>{errors.password}</p>
        )}
        <hr />
        <button type="submit">LogIn</button>
      </form>

      <div
        className={`${styles.termsContainer} ${
          isFieldsValid ? styles.termsValid : styles.termsInvalid
        }`}
      >
        <p>Bienvenido a la página oficial de 'Rick and Morty'! Sumérgete en el multiverso más loco y emocionante con Rick, un científico alcohólico y genio, y su nieto Morty, un adolescente con poco sentido común. Explora episodios llenos de aventuras interdimensionales, personajes extravagantes y humor irreverente. En nuestra página, encontrarás noticias exclusivas, contenido detrás de escena, y la posibilidad de conectarte con otros fanáticos. ¡Descubre detalles sobre los episodios, mira avances de la nueva temporada y explora el universo de 'Rick and Morty' como nunca antes! Únete a la diversión, explora los misterios del multiverso y mantente al tanto de todas las novedades en nuestra página oficial. ¡La diversión interdimensional está a solo un clic de distancia!</p>
      </div>
    </div>
  );
}