import Dasboard from "../components/Dasboard";
import ListVote from "../components/ListVote";
import NavbarAdmin from "../components/NavbarAdmin";


const DsAdmin:React.FC = () => {
    return (
        <div>
            {/* <NavbarAdmin/> */}
            <Dasboard/>
            <ListVote/>
        </div>
    )
}
export default DsAdmin;