import React, { useState } from "react";

function FiltrarFrutas() {
  const [busqueda, setBusqueda] = useState("");
  const frutas = ["Manzana", "Banana", "Naranja", "Pera", "Durazno", "Mango"];

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul>
        {frutasFiltradas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltrarFrutas;
