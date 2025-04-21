import React from 'react';
import '../Styles/Profile.css'; 

const Profile = () => {
  return (
    <div className="profile">
      <h1>Perfil del Usuario</h1>
      <div className="card">
        <h2>Nombre del Usuario</h2>
        <p>Correo: usuario@example.com</p>
        <p>Miembro desde: Enero 2024</p>
        <button>Editar Perfil</button>
      </div>
    </div>
  );
};

export default Profile;


  