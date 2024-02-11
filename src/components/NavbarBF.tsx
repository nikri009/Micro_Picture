import { useLocation } from "react-router-dom";
import { useAuth } from "../auth/Auth";
import NavLogo from "../elements/NavLogo";
// import NavRouteAdmin from "../elements/NavRouteAdmin";

import NavRouter from "../elements/NavRouter";


const NavbarBF:React.FC = () => {
    const { isLoggedIn, logout} = useAuth();
    const location = useLocation();

    // Daftar path yang tidak memerlukan navbar
    const excludedPaths = ['/login', '/register'];

    // Periksa apakah path saat ini harus menampilkan navbar
    const shouldShowNavbar = !excludedPaths.includes(location.pathname);

    if (!shouldShowNavbar) {
        return null; // Jika tidak perlu menampilkan navbar, return null
      }

    return (
        <>
        <nav className="sm:flex bg-black  w-full p-3 g-2">
            <NavLogo/>
            <NavRouter isLoggedIn={isLoggedIn()} onLogout={logout} />
        </nav>
        </>
    )
}

export default NavbarBF;