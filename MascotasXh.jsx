import React from 'react'
import CardsXh from './CardsXh'



export default function MascotasXh() {
  const mascotas = [
    { id: 1, nombre: 'Max', raza: 'Golden Retriever', edad: '5 años', genero: 'Macho'},
    { id: 2, nombre: 'Luna', raza: 'Labrador', edad: '3 años', genero: 'Hembra'},
    { id: 3, nombre: 'Rocky', raza: 'Bulldog', edad: '4 años', genero: 'Macho'}
]
    return (
    <div className='Mascota_1'>
        <div className='Mascota_2'>
            <h2>Mis Mascotas</h2>
            <button className='Bton_1'>
                Agregar Mascota
            </button>
        </div>
        <div className='List_1'>
            {mascotas.map(mascota => (
                <CardsXh key ={mascota.id}
                mascota ={mascota} />
            ))}
        </div>
    </div>
  );
}
