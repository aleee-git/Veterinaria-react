import React from 'react';
import Paciente from './Paciente';

export default function ListadoPacientes() {
  return (
    <div className='md:w-1/2 lg:w-3/5 p-10 md:h-screen overflow-y-scroll'>

      <h2 className='font-black text-center text-3xl'> Listado Pacientes </h2>
      <p className='text-xl mt-5 text-center mb-10'> Administra tus {""} <span className='text-lime-600 font-bold'>Pacientes y citas</span></p>

      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>

    </div>
  );
}
