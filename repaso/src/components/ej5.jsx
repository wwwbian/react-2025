import { useState } from "react";

function Formulario () {
 const [form, setForm] = useState()
 const [guardado, setGuardado] = useState()

  return (
    <div className="input">
      <input type="text"
      value ={form}
      onChange={(e) => setForm(e.target.value)} 
    
       />
     <button onClick={() => {setGuardado(form); alert(form); }} >
        ingresar
      </button>

    </div>
    
  );
}
export default Formulario