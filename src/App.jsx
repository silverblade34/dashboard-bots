// Importación de módulos y componentes
import { Myroutes } from "./routers/routes";
import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar"
import { Light, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

// Creación de un objeto de contexto para el tema
export const ThemeContext = React.createContext(null)

// Componente principal de la aplicación
function App() {
  // Creación de un estado para el tema de la aplicación
  const [theme, setTheme] = useState("light");
  // Selecciona el estilo de tema correcto según el estado de tema actual
  const themeStyle = theme === "light" ? Light : Dark;
  // Función para cambiar el tema de la aplicación
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"))
  }
  // Creación de un estado para controlar si la barra lateral está abierta o no
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  // Renderizado del componente
  return (
    <>
      <ThemeContext.Provider value={[setTheme, theme ]}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
                  <Sidebar sidebarOpen= {sidebarOpen}  setSidebarOpen={ setSidebarOpen}/>
                  <Myroutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({ theme }) => theme.bgtotal};
    transition: all 0.4s;
    &.active{
      grid-template-columns: 300px auto;
  }
`;
export default App
