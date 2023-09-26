import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import About from './components/Abaut/Abaut.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'andres_9_09@hotmail.com';
  const password = '512364';
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    
  }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  }


  const onClose = id => {
    if (Array.isArray(characters)) {
      setCharacters(characters.filter(char => char.id !== id));
    }
  
  }
  const location = useLocation()

  return (
    <div className='App' style={{ padding: "25px" }}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <hr />
      <Routes>
        <Route exact path='/' element={<Form onSubmit={login} />}/>
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;