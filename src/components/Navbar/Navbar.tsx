import "./Navbar.css"
import Button from "../Button/Button";
import { MdOutlineMap, MdDirectionsCar } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src="logo_placeholder.svg" alt="" className="logo" />

            <nav className="nav">
                <NavLink to='/' className="navlink"><Button icon={MdDirectionsCar} text="Cars" className="nav-button" /></NavLink>
                <NavLink to='/map' className="navlink"> <Button icon={MdOutlineMap} text="Map" className="nav-button" /></NavLink>
            </nav>
        </div>
    )
}

export default Navbar