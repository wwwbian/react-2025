import { useState } from "react";

function Input () {
 const [input, setInput] = useState()
 const [guardado, setGuardado] = useState()

  return (
    <div className="input">
      <h1>{guardado} </h1>
      <input type="text"
      value ={input}
      onChange={(e) => setInput(e.target.value)} 
      
       />
      <button onClick={() => setGuardado(input)} >
        ingresar
      </button>
    </div>
    
  );
}
export default Input