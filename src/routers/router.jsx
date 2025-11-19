import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { UseEffectPage } from "../pages/UseEffectPage";
import { AImagenesPage } from "../pages/AImagenesPage";

export const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/useeffect" element={<UseEffectPage />} />
      <Route path="/imagenes" element={<AImagenesPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
