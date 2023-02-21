import styled from "styled-components";
import logo from "../assets/logo-small.png";
import { v } from "../styles/Variables";
import { AiOutlineLeft, AiOutlineHome, AiOutlineApartment } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom"
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const ModificarOpen = () => {
        setSidebarOpen(!sidebarOpen);
    }
    return (
        <ContainerSidebar isOpen={sidebarOpen}>
            <button onClick={ModificarOpen} className="Sidebarbutton">
                <AiOutlineLeft />
            </button>
            <div className="LogoContent">
                <div className="imgcontent">
                    <img src={logo} alt="" />
                </div>
                <h2>
                    Sysnet del Perú
                </h2>
            </div>
            {linksArray.map(({icon, label, to}) => (
                <div className="LinkContainer" key="label">
                    <NavLink to={to} className={({isActive})=>`Links${isActive?` active`:``}`}>
                        <div className="Linkicon">
                            {icon}
                        </div>
                        {
                            sidebarOpen &&(
                                <span>{label}</span>
                            )
                        }
                    </NavLink>
                </div>
            ))}
        </ContainerSidebar>
    )
}

//#REGION
const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/"
    },
    {
        label: "Estadisticas",
        icon: <MdOutlineAnalytics />,
        to: "/estadisticas"
    },
    {
        label: "Productos",
        icon: <AiOutlineApartment />,
        to: "/productos"
    },
    {
        label: "Diagramas",
        icon: <MdOutlineAnalytics />,
        to: "/prueba1"
    },
    {
        label: "Reports",
        icon: <AiOutlineApartment />,
        to: "/prueba2"
    }
]
//#ENDREGION

//#REGION STYLED COMPONENTS
const ContainerSidebar = styled.div`
/* Estilos aquí */
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    position: sticky;
    padding-top: 20px;
    .Sidebarbutton {
        position: absolute;
        top: ${v.xxlSpacing};
        right: -18px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${(props) => props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
        display:flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        transform: ${({ isOpen }) => (isOpen == true ? `initial` : `rotate(180deg)`)};
        border: none;
        letter-spacing: inherit;
        color: inherit;
            font-size: inherit;
            text-align: inherit;
            padding: 0;
            outline: none;
    }
    .LogoContent{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${v.lgSpacing};
        .imgcontent{
            img{
                max-width: 100%;
                height: auto;
            }
            cursor: pointer;
            transition: all 0.3s;
            transform: ${({ isOpen }) => (isOpen == true ? `scale(0.9)` : `scale(1.5)`)}
        };
        h2{
            display: ${({ isOpen }) => (isOpen == true ? `block` : `none`)}
        }
    }
    .LinkContainer{
        margin: 8px 0;
        padding: 0 15%;
        :hover{
            background: ${(props) => props.theme.bg3}
        }
        .Links{
            display:flex;
            align-items: center;
            text-decoration: none;
            padding: calc(${v.smSpacing}- 2px) 0;
            color: ${(props)=>props.theme.text};
            .Linkicon{
                padding: ${v.smSpacing} ${v.mdSpacing};
                display: flex;
                svg{
                    font-size: 25px;
                }
            }
            &.active{
                color: ${(props)=>props.theme.bg4};
                .Linkicon{
                    svg{
                        color: ${(props)=>props.theme.bg4};
                    }
                }
            }
        }
    }
`;
//#ENDREGION

