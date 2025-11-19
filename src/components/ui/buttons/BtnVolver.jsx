import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const BtnVolver = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 bg-white text-black hover:bg-amber-300 p-3 rounded-full shadow-lg cursor-pointer"
    >
      <Icon icon="mdi:arrow-left-bold" width="24" height="24" />
    </button>
  );
};
