import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
const LogoMatePava = "/assets/images/1.png"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
                <NavLink className="navbar-brand d-lg-none" to = {"/"}>
                <img src={LogoMatePava} alt="logo mate"/>
                </NavLink>
            <button
            className="navbar-toggler"
            type="button text-light"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto fs-3 ">
                <li className="nav-item">
                <NavLink to= {"/destacados"} className="nav-link text-light" aria-current="page" >Destacados</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to= {"/category/Mate"} className="nav-link text-light">Mates</NavLink>
                </li>
                <NavLink className="navbar-brand d-none d-lg-block" to = {"/"}>
                <img src={LogoMatePava} alt="logo mate"/>
                </NavLink>
                <li className="nav-item">
                <NavLink to= {"/category/Matera"} className="nav-link text-light">Materas</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to= {"/category/Set asado"} className="nav-link text-light">Sets Asador</NavLink>
                </li>
            </ul>
            </div>
            <div className="p-3">
            <CartWidget />
            </div>
        </div>
        </nav>
    );
};

export default NavBar;
