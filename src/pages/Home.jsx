import React, { useState } from 'react';

function PreRegistroForm() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [imagenDniDorso, setImagenDniDorso] = useState(null);
  const [imagenDniReverso, setImagenDniReverso] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario y las imágenes al backend
  };

  const handleDniDorsoChange = (e) => {
    const file = e.target.files[0];
    setImagenDniDorso(file);
  };

  const handleDniReversoChange = (e) => {
    const file = e.target.files[0];
    setImagenDniReverso(file);
  };

  const handleLoginClick = () => {
    // Lógica para redireccionar a la página de login
  };

  const handleVerTramiteClick = () => {
    // Lógica para ver el estado del trámite
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Acceder</button>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </label>
        <br />
        <label>
          Edad:
          <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <br />
        <label>
          Número de documento:
          <input type="text" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} />
        </label>
        <br />
        <label>
          Imagen del DNI (dorso):
          <input type="file" accept="image/*" onChange={handleDniDorsoChange} />
        </label>
        <br />
        <label>
          Imagen del DNI (reverso):
          <input type="file" accept="image/*" onChange={handleDniReversoChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <button onClick={handleVerTramiteClick}>Quiero ver mi trámite</button>
  
    </div>
  );
}

export default PreRegistroForm;