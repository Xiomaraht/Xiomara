import React from 'react'
import '../styles/InfoU_Xh.css'

export default function InfoU_Xh() {
  return (
    <div className='Info_1'>
        <h2>Información Personal</h2>
        <form className='Info_2'>
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
        </form>
    </div>
  );
}
