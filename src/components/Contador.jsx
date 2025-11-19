import { useState } from "react";
import { Modal } from "./Modal";
export const Contador = () => {
  // este es un hook
  const [estado, setEstado] = useState(true);
  return (
    <div className="bg-amber-600 p-4 border rounded-2xl">
      <h1 className="contador">contador </h1>
      <button onClick={() => setEstado(!estado)}>
        {estado ? "ocultar" : "ver"}
      </button>
      {estado && <Modal />}
    </div>
  );
};
