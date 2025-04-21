import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a Mini Sena</h1>
      <p>Una plataforma para gestionar usuarios y perfiles con autenticación segura.</p>
      <button onClick={() => window.location.href = '/login'}>
        Iniciar Sesión
      </button>
    </div>
  );
};

export default Home;



  