import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
        <h1> {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Sumar
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
       Restar
      </button>
    
    </div>
  );
}
export default Card