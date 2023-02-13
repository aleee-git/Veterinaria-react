import { React, useState, useEffect } from 'react';
import Error from './Error'

// Llamar props de App.jsx
export default function Formulario({setPacientes, pacientes}) {

  // Hook => Variable, modificador = valor inicial
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState (false);

  const generarID = () => {
    const random = Math.random().toString(30);
    const fecha = Date.now().toString(30);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea un array con las variables y si alguno incluye un string vacio envia alerta
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {

      setError(true);
      console.log("Hay al menos un campo vacio :(");
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id : generarID()
    }

    // Copiar lo que hay en pacientes a objectoPaciente, un nuevo array
    setPacientes ([...pacientes, objetoPaciente]);

    // Reiniciar formulario
    setNombre ("");
    setPropietario ("");
    setEmail ("");
    setFecha ("");
    setSintomas ("");

  }

  
  return (
    <div className='md:w-1/2 lg:w-2/5 p-10'>

      <h2 className='font-black text-3xl text-center'> Seguimiento Pacientes </h2>
      
      <p className='text-lg mt-5 text-center mb-10 '> Añade Pacientes y {""} <span className='text-lime-600 font-bold'>Administralos</span></p>
      
      <form onSubmit = {handleSubmit} className='bg-white shadow-md rounded-lg p-10 mb-10'>
        
        {error && <Error mensaje="Todos los campos son obligatorios"/>}

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="mascota"> Nombre Mascota </label>
          {/* Agregar valor al input de acuerdo al Hook */}
          <input value={nombre} onChange={(event) => setNombre(event.target.value)} 
          className='border-2 w-full mt-2 rounded-md'type="text" id='mascota'/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="propietario"> Nombre Propietario </label>
          <input value={propietario} onChange={(event) => setPropietario(event.target.value)} 
          className='border-2 w-full mt-2 rounded-md' type="text" id='propietario'/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="email"> Email </label>
          <input value={email} onChange={(event) => setEmail(event.target.value)}
          className='border-2 w-full mt-2 rounded-md' type="email" id='email'/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="alta"> Alta </label>
          <input value={fecha} onChange={(event) => setFecha(event.target.value)}
          className='border-2 w-full mt-2 rounded-md' type="date" id='alta'/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 font-bold uppercase' htmlFor="sintomas"> Sintomas </label>
          <textarea value={sintomas} onChange={(event) => setSintomas(event.target.value)} 
          className='border-2 w-full mt-2 rounded-md' type="text" id='sintomas'/>
        </div>

        <input className='bg-amber-900 hover:bg-lime-700 cursor-pointer text-white p-3 rounded-lg w-full uppercase font-bold' type="submit" value="Agregar paciente" />

      </form>

    </div>
  );
}
