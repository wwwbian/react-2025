import React from "react";

function ListaNombres() {
  const nombres = ["Juan", "pablo", "marcos", "carlos"];

  return (
    <div>
      <h2>Lista de nombres</h2>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNombres;
