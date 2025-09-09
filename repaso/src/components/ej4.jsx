import { useState } from "react";

function Color() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "50px",
        textAlign: "center",
        minHeight: "200px",
      }}
    >

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="white">Blanco</option>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
      </select>
    </div>
  );
}

export default Color;
