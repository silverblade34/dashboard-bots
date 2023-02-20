import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Estadisticas from "../pages/Estadisticas"
import Productos from "../pages/Productos"

export function Myroutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/productos" element={<Productos />}></Route>
            <Route path="/estadisticas" element={<Estadisticas />}></Route>
        </Routes>
    );
}