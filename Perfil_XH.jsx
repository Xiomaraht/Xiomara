import './styles/Perfil_XH.css'

import React from 'react'

export default function  Perfil_XH() {
  return (
    <div className='Perf_1'>
        <h4>Mi Perfil</h4>
        <p>Gestiona tu informacion personal y la de tus mascotas</p>
        <div className='Perf_2'>
            <h6>Nombre Cliente</h6>
            <p>Correo cliente</p>
            <div className='Info'><h5>Informacion Personal</h5></div>
            <h5>Mis mascotas</h5>
            <h5>Historial de pagos</h5>
            <h5>Métodos de pago</h5>
            <h5>Configuración</h5>
            <h5>Cerrar Sesión</h5>
        </div>
        <div className='Perf_3'>
            <h3>Información Personal</h3>
            <h5>Nombre</h5>
            <div className='Ges_1'></div>
            <h5>Correo Electrónico</h5>
            <div className='Ges_1'></div>
            <h5>Teléfono</h5>
            <div className='Ges_1'></div>
            <h5>Dirección</h5>
            <div className='Ges_1'></div>
        </div>
    </div>
  )
}
