import React from "react";

function ListaProductos() {
  const productos = [
    { item: "Arroz", precio: 3000 },
    { item: "Fideos", precio: 1500 },
    { item: "Lentejas", precio: 2000 },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.item} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
