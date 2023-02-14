import React from 'react';
import Paciente from './Paciente';

export default function ListadoPacientes({pacientes, setPaciente, eliminar}) {

  return (
    <div className='md:w-1/2 lg:w-3/5 p-10 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-center text-3xl'> Listado Pacientes </h2>
          <p className='text-xl mt-5 text-center mb-10'> Administra tus {""} <span className='text-lime-600 font-bold'>Pacientes y citas</span></p>
    
          {/* Iterar el componente, hacer una copia */}
          { pacientes.map (paciente => (
            <Paciente 
            // Crear un id
            key = {paciente.id}
            paciente = {paciente}
            setPaciente = {setPaciente} 
            eliminar = {eliminar} />
          ))}
          </>
      ) : (
        <>
        <h2 className='font-black text-center text-3xl'> No hay pacientes </h2>
        <p className='text-xl mt-5 text-center mb-10'> Agrega pacientes {""} <span className='text-lime-600 font-bold'>y apareceran aquí</span></p>
        </>
      )}

    </div>
  );
}
