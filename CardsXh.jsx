import React from 'react'
import '../styles/MascotasXh.css'

export default function CardsXh({mascota}) {
  return (
    <div className='card_1'>
      <div className='Img_1'>
        <p className='nombre'>{mascota.nombre}</p>
        <p className='detalle'>{mascota.raza}</p>
        <p className='detalle'>{mascota.edad}</p>
        <p className='detalle'>{mascota.genero}</p>
        <div className='Botones'> 
          <button className='bton_1'>Editar</button>
          <button className='bton_2'>Historial</button>
        </div>
      </div>
    </div>
  )
}

