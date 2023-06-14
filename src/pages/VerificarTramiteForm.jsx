import React, { useState } from 'react';

function VerificarTramiteForm() {
  const [numeroTramite, setNumeroTramite] = useState('');
  const [estadoTramite, setEstadoTramite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para verificar el estado del trámite del alumno en el backend
    // y actualizar el estadoTramite en consecuencia
    // Puedes usar una llamada a API o cualquier otra forma de obtener la información necesaria
    // Ejemplo de lógica ficticia:
    if (numeroTramite === '123456') {
      setEstadoTramite('Aceptado');
    } else {
      setEstadoTramite('Rechazado');
    }
  };

  return (
    <div>
      <h2>Verificar Estado del Trámite</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Trámite:
          <input type="text" value={numeroTramite} onChange={(e) => setNumeroTramite(e.target.value)} />
        </label>
        <br />
        <button type="submit">Verificar</button>
      </form>
      {estadoTramite && <p>Estado del Trámite: {estadoTramite}</p>}
    </div>
  );
}

export default VerificarTramiteForm;