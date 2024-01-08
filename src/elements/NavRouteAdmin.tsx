import { Link } from "react-router-dom";
interface NavbarProps {
    isLoggedIn: boolean;
    onLogout: () => void;
  }
const NavRouteAdmin : React.FC<NavbarProps> = ({isLoggedIn, onLogout}) => {
    return (
        <div className="sm:flex items-center sm:w-1/2 sm:justify-center gap-3 text-center">
            <p className="text-white p-2"> <Link to="/">Partai</Link> | <Link to="/ListPaslon"> Paslon </Link>  </p>   
            {isLoggedIn ? (
            <button className="bg-slate-300 rounded-md w-20 h-7"><Link to="/login" onClick={onLogout}>Logout</Link></button>

                
            ) : (
            <button className="bg-slate-300 rounded-md w-20 h-7"><Link to="/login">Login</Link></button>

            )} 
            
        </div>
    )
}

export default NavRouteAdmin;