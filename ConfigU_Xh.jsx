import React from 'react'

export default function ConfigU() {
  return (
    <div className='Config_1'>
        <div className='Config_2'>
        <h2>Información Personal</h2>
        <div className='Form_1'>
            <div className='Form_2'>
                <label htmlFor="nombre">Nombre</label>
                <input id='nombre' type="text" />       
            </div>
            <div className='Form_2'>
                <label htmlFor="apellido">Apellido</label>
                <input id='apellido' type="text" />
            </div>
            <div className='Form_2'>
                <label htmlFor="correo">Correo Electrónico</label>
                <input id='correo' type="email" />
            </div>
            <div className='Form_2'>
                <label htmlFor="telefono">Teléfono</label>
                <input id='telefono' type="tel" />
            </div>
            <div className='Form_2'>
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input id='fechaNacimiento' type="date" />
            </div>
            <div className='Form_2'>
                <label htmlFor="direccion">Dirección</label>
                <input id='direccion' type="text" />
            </div>
        </div>
        <div className='Boton'>
            <button className='Boton_1' onClick={() =>setMostrarModel(true)}>
                Cambiar Contraseña
            </button>
            <button className='Boton_2'></button>
        </div>
        </div>
        {mostrarModel && <CambiarContraseñaModel onClose={() => setMostrarModel(false)}/>}
    </div>
  );
}
