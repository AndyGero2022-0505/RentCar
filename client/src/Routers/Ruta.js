import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App/App";
import Analisis from "../Admin/Analisis";
import ListaVehiculos from "../Admin/ListaVehiculos";

export function Ruta() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/analisis" element={<Analisis />} />
        <Route path="/admin/lista-vehiculos" element={<ListaVehiculos />} />
      </Routes>
    </BrowserRouter>
  );
}
