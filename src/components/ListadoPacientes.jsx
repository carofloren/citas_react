import { Paciente } from './Paciente';
// import { useEffect } from 'react';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // useEffect(() => {
  //   if (pacientes.length > 0) console.log('v nuevo paciente');
  // }, [pacientes]);

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
          {' '}
          <h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
          <p className='text-center mt-5 text-xl mb-10'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          {' '}
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-center mt-5 text-xl mb-10'>
            Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
