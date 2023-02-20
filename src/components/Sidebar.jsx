import styled from "styled-components";
import logo from "../assets/logo-small.png"

export function Sidebar({sidebarOpen, setSiderbarOpen}){
    return(
        <ContainerSidebar>
            <div className="LogoContent">
                <div className="imgcontent">
                    <img src={logo} alt="" />
                </div>
                <h2>
                    Sysnet del Perú
                </h2>
            </div>
        </ContainerSidebar>
    )
}

const ContainerSidebar = styled.div`
/* Estilos aquí */
    background-color: ${(props)=> props.theme.bg};
    color: ${(props)=> props.theme.text};
    position: sticky;
    .LogoContent{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 
    }
`;
