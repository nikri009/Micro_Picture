
import NavLogo from "../elements/NavLogo";
// import NavRouteAdmin from "../elements/NavRouteAdmin";

import NavRouter from "../elements/NavRouter";
interface NavbarProps {
    isLoggedIn: boolean;
    // isAdmin:boolean;
    onLogout: () => void;
  }

const NavbarBF:React.FC<NavbarProps> = ({isLoggedIn, onLogout }) => {

    return (
        <>
        <nav className="sm:flex bg-black  w-full p-3 g-2">
            <NavLogo/>
            <NavRouter isLoggedIn={isLoggedIn} onLogout={onLogout}/>
            {/* {isAdmin?(
                <NavRouteAdmin isLoggedIn={isLoggedIn} onLogout={onLogout}/>
            ):(
                <NavRouter isLoggedIn={isLoggedIn} onLogout={onLogout}/>
            )} */}
            
            
        </nav>
        </>
    )
}

export default NavbarBF;