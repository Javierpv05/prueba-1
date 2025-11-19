import { useEffect, useState } from "react";
import { BtnVolver } from "../components/ui/buttons/BtnVolver";

export const UseEffectPage = () => {
  // temporizador  con el hock en tienpo real
  const [segundos, setSeguntos] = useState(0);
  // ahora construimos con el hoxk useEffect
  // useEffect(()=>{},[]) esta es la estructura de useEffect, es la primera que se carga al entrar a una pagian
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSeguntos((s) => s + 1);
    }, 1000); // aquii le decimos que se ejecute cada 1 segundo lo que esta dentro {}
    // para desmontar el componete y que ya no se muestre al usuario cuando sale
    return () => clearInterval(intervalo); // aqui limpiamos ell intervalo cuando ya no se mueste el componennte
  }, []);
  return (
    <div className="h-screen bg-amber-400 text-black flex flex-col justify-center items-center">
      <BtnVolver />
      <h2 className="text-3xl font-bold mb-5">UseEffectPage</h2>
      <div className="w-48 h-48 rounded-full bg-sky-700 border-5 flex items-center justify-center">
        <span className="text-4xl font-semibold">{segundos}</span>
      </div>
    </div>
  );
};
