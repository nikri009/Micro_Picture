import { Link } from "react-router-dom";
const BtLogin: React.FC = () => {
    return (
        <div>
            <button className="bg-slate-300 rounded-md w-20 h-7"><Link to="/login">Login</Link></button>
        </div>
    )
}

export default BtLogin;