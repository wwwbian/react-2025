import { useState } from "react";

function Guardar () {
 const [guardar, setGuardar] = useState("")

  return (
    <div className="input">
      <h1>{guardar} </h1>
      <input type="text"
      value ={guardar}
      onChange={(e) => setGuardar(e.target.value)}
      
       />
    </div>
    
  );
}
export default Guardar