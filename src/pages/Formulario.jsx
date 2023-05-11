import React, { useState } from 'react';



function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <form>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Mensaje:
        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;