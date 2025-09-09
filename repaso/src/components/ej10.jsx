import React, { useState } from "react";

function TotalPrecios() {
  const [precios] = useState([500, 1200, 800, 300]);

  const total = precios.reduce((acum, precio) => acum + precio, 0);

  return (
    <div>
      <h2>Lista de precios</h2>
      <ul>
        {precios.map((precio, index) => (
          <li key={index}>${precio}</li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default TotalPrecios;
