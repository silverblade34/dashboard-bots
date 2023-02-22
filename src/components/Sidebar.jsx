import styled from "styled-components";
import logo from "../assets/logo-small.png";
import { v } from "../styles/Variables";
import { AiOutlineLeft, AiOutlineHome, AiOutlineApartment, AiOutlineSetting } from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../App";
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const ModificarOpen = () => {
        setSidebarOpen(!sidebarOpen);
    }
    const [setTheme, theme] = useContext(ThemeContext)
    const CambiarTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
    }
    return (
        <ContainerSidebar isOpen={sidebarOpen} themeUse={theme}>
            <button onClick={ModificarOpen} className="Sidebarbutton">
                <AiOutlineLeft />
            </button>
            <div className="LogoContent">
                <div className="imgcontent">
                    <img src={logo} alt="" />
                </div>
                <h3>
                    Sysnet del Perú
                </h3>
            </div>
            {linksArray.map(({ icon, label, to }) => (
                <div className="LinkContainer" key={label}>
                    <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
                        <div className="Linkicon">
                            {icon}
                        </div>
                        {
                            sidebarOpen && (
                                <span>{label}</span>
                            )
                        }
                    </NavLink>
                </div>
            ))}
            <Divider />
            {secondarylinksArray.map(({ icon, label, to }) => (
                <div className="LinkContainer" key={label}>
                    <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
                        <div className="Linkicon">
                            {icon}
                        </div>
                        {
                            sidebarOpen && (
                                <span>{label}</span>
                            )
                        }
                    </NavLink>
                </div>
            ))}
            <Divider />
            <div className="ThemeContent">
                {sidebarOpen && <span> Dark mode</span>}
                <div className="Togglecontent">
                    <div className="grid theme-container">
                        <div className="content">
                            <div className="demo">
                                <label className="switch">
                                    <input type="checkbox" onClick={CambiarTheme} className="theme-switcher" id="" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerSidebar>
    )
}

//#REGION LINKSARRAY
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

//#REGION
const secondarylinksArray = [
    {
        label: "Configuración",
        icon: <AiOutlineSetting />,
        to: "/configuracion"
    },
    {
        label: "Salir",
        icon: <MdLogout />,
        to: "/logout"
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
            transform: ${({ isOpen }) => (isOpen == true ? `scale(0.9)` : `scale(1.1)`)}
        };
        h3{
            display: ${({ isOpen }) => (isOpen == true ? `block` : `none`)};
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
            color: ${(props) => props.theme.text};
            .Linkicon{
                padding: ${v.smSpacing} ${v.mdSpacing};
                display: flex;
                svg{
                    font-size: 25px;
                }
            }
            &.active{
                color: ${(props) => props.theme.bg4};
                .Linkicon{
                    svg{
                        color: ${(props) => props.theme.bg4};
                    }
                }
            }
        }
    }
    .ThemeContent{
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            display: block;
            padding: 10px;
            font-weight: 700;
        }
        .Togglecontent{
            margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
            width: 36px;
            height: 20px;
            border-radius: 10px;
            transition: all 0.3s;
            position: relative;
            .theme-container{
                background-color: multiply, multiply;
                transition: 0.4s;
                .grid{
                    display: grid;
                    justify-items: center;
                    align-content: center;
                    height: 100vh;
                    width: 100vw;
                    font-family: "Lato", sans-serif;
                }
                .demo{
                    font-size: 32px;
                    .switch{
                        position: relative;
                        display:inline-block;
                        width: 60px;
                        heigh: 34px;
                        .theme-switcher{
                            opacity: 0;
                            width: 0;
                            height:0;
                            &:checked + .slider:before{
                                left: 4px;
                                content: "🌒";
                                transform: translatex(26px)
                            }
                        }
                        .slider{
                            position: absolute;
                            cursor: pointer;
                            top: 0;
                            height: 65%;
                            left:0;
                            right:0;
                            bottom: 0;
                            background: ${({themeUse})=>(themeUse==="light"?v.lightcheckbox:v.darkcheckbox)};
                            transition: 0.4s;
                            &::before{
                                position: absolute;
                                content: "☀️";
                                height: 34px;
                                width: 0px;
                                left: -10px;
                                top: 16px;
                                line-height:0px;
                                transition: 0.4s;
                            }
                            &.round{
                                border-radius: 34px;
                                &::before{
                                    border-radius: 50%;
                                }
                            }
                        }
                    }  
                }
            }
        }
    }

`;
//#ENDREGION

//#REGION STYLED DIVISION
const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg3};
    margin: ${v.lgSpacing} 0;
`;
//#ENDREGION
