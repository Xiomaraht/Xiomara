import React from 'react';
import '../Styles/RegisterForm.css';  

const RegisterForm = () => {
  return (
    <div className="register-form">
      <h2>Registrarse</h2>
      <form>
        <input type="text" placeholder="Nombre de usuario" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;

