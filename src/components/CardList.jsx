import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const CardList = () => {
  const temasTeoria = [
    { title: "useEffect", do: "/useeffect" },
    { title: "imagenes", do: "/imagenes" },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      {/* hacemos el mapeo para ello siempre dentro del div usando .map , esto para listar los objetos que tenemos  */}
      {temasTeoria.map((item, index) => (
        <Link
          to={item.do}
          key={index}
          className="w-full bg-[#202020] p-5 rounded-xl border-3 border-red-800 flex justify-between hover:border-[purple] cursor-pointer hover:bg-blue-500"
          //   con el hover:--- hacemos que el color del borde o cualquier otro cambie cad que pasamos el mouse, y con el curosr-pointer (cuando pasamos el cursor cambia a manito )
        >
          <h1 className="font-medium text-lg">{item.title}</h1>
          <Icon icon="ri:arrow-up-fill" width="24" height="24" />
          <Icon
            icon="streamline-pixel:technology-robot-ai"
            width="32"
            height="32"
          />
        </Link>
      ))}
    </div>
  );
};
