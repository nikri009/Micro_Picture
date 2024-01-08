import { Link } from "react-router-dom";
const BtAfterLogin:React.FC = () =>{
    return(
        <button className="bg-slate-300 rounded-md w-20 h-7"><Link to="/login">Logout</Link></button>
    )
}
export default BtAfterLogin;