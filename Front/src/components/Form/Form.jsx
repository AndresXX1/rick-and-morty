import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./Validation.js";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(userData);
  };

  return (
    <div className={styles.dataContainer}>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p className={styles.error}>{errors.username && errors.username}</p>
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={styles.error}>{errors.password && errors.password}</p>
        <hr />
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}