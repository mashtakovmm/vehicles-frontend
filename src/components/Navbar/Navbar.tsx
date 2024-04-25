import "./Navbar.css"
import Button from "../Button/Button";
import { MdOutlineMap, MdDirectionsCar } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src="logo_placeholder.svg" alt="" className="logo" />

            <nav className="nav">
                <NavLink to='/' className="navlink"><Button icon={MdDirectionsCar} text="Cars" className="nav-button" /></NavLink>
                <NavLink to='/map' className="navlink"> <Button icon={MdOutlineMap} text="Map" className="nav-button" /></NavLink>
                <a className="navlink" href="https://github.com/mashtakovmm/vehicles-frontend" target="_blank"> <Button icon={VscGithubInverted} text="github" className="nav-button" /></a>
            </nav>
        </div>
    )
}

export default Navbar