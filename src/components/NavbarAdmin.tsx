import NavLogo from "../elements/NavLogo";
import NavRouteAdmin from "../elements/NavRouteAdmin";



const NavbarAdmin:React.FC = () => {
    return (
        <div className="sm:flex bg-black p-2">
            <NavLogo/>
            <NavRouteAdmin/>
            
        </div>
    )
}

export default NavbarAdmin;