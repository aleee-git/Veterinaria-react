import React from 'react';

export default function Formulario() {
  return (
    <div className='md:w-1/2 lg:w-2/5 p-10'>

      <h2 className='font-black text-3xl text-center'> Seguimiento Pacientes </h2>
      
      <p className='text-lg mt-5 text-center mb-10 '> Anade Pacientes y {""} <span className='text-lime-600 font-bold'>Administralos</span></p>
      
      <form className='bg-white shadow-md rounded-lg p-10 mb-10'>
        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="mascota"> Nombre Mascota </label>
          <input className='border-2 w-full mt-2 rounded-md placeholder-gray-400'placeholder='Ej.: Pelusa' type="text" id='mascota'/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="propietario"> Nombre Propietario </label>
          <input className='border-2 w-full mt-2 rounded-md placeholder-gray-400'placeholder='Ej.: Juan' type="text" id='propietario'/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="email"> Email </label>
          <input className='border-2 w-full mt-2 rounded-md placeholder-gray-400'placeholder='Ej.: yo@gmail.com' type="email" id='email'/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="alta"> Alta </label>
          <input className='border-2 w-full mt-2 rounded-md placeholder-gray-400' type="date" id='alta'/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="sintomas"> Sintomas </label>
          <textarea className='border-2 w-full mt-2 rounded-md placeholder-gray-400 text-center'placeholder='Describe los Sintomas' type="text" id='sintomas'/>
        </div>

        <input className='bg-amber-900 hover:bg-lime-700 cursor-pointer text-white p-3 rounded-lg w-full uppercase font-bold' type="submit" value="Agregar paciente" />

      </form>

    </div>
  );
}
