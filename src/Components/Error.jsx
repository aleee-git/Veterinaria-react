import React from 'react';

export default function Error({mensaje}) {
  return (
    <div>
        <div className='bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
        <p> {mensaje} </p>
        </div>
    </div>
  );

}
