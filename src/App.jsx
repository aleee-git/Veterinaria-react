import {useState, useEffect} from 'react'
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListadoPacientes from './Components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState ([]);

  const [paciente, setPaciente] = useState ({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminar = id => {
    const Actualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(Actualizados);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario 
        pacientes = {pacientes} 
        setPacientes = {setPacientes}
        paciente = {paciente} 
        setPaciente = {setPaciente} />
        
        <ListadoPacientes 
        pacientes = {pacientes} 
        setPaciente = {setPaciente} 
        eliminar = {eliminar}/>
      </div>
    </div>
  )
}

export default App
