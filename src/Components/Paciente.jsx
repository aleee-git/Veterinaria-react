import React from 'react';

export default function Paciente({paciente, setPaciente, eliminar}) {

  const handleEliminar = () => {
    const confirma = confirm('Seguro lo quieres eliminar?');

    if (confirma) {
      eliminar(paciente.id);
    }
  }

  return (
    <div className='m-3 bg-white shadow-md rounded-lg p-10 mb-10'>

    <p className='font-bold mb-3 text-gray-800 uppercase'> Nombre: {""} <span className="lowercase font-normal">{paciente.nombre}</span></p>

    <p className='font-bold mb-3 text-gray-800 uppercase'> Propietario: {""} <span className='font-normal normal-case'>{paciente.propietario}</span></p>

    <p className='font-bold mb-3 text-gray-800 uppercase'> Email: {""} <span className='font-normal normal-case'>{paciente.email}</span></p>

    <p className='font-bold mb-3 text-gray-800 uppercase'> Fecha Alta: {""} <span className='font-normal normal-case'>{paciente.fecha}</span></p>

    <p className='font-bold mb-3 text-gray-800 uppercase'> Sintomas: {""} <span className='font-normal normal-case'>{paciente.sintomas}</span></p>

    <div className='flex justify-evenly mt-8'>

      <button type="button" onClick={() => setPaciente(paciente)} className='bg-lime-600 cursor-pointer text-white p-3 rounded-lg uppercase font-bold'>Editar</button>
      
      <button type="button" onClick={handleEliminar} className='bg-red-600 cursor-pointer text-white p-3 rounded-lg uppercase font-bold'>Eliminar</button>

    </div>
    
  </div>
  
  );
}