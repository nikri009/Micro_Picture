import FooterHome from "../components/FooterHome";
import NavbarBF from "../components/NavbarBF";
import HeaderDetail from "../elements/HeaderDetail";
import TitleDetail from "../elements/TitleDetail";


const DetailBerita:React.FC = () =>{
    return(
        <div className="grid justify-items-center bg-slate-300">
        <NavbarBF/>
        <HeaderDetail/>
        <TitleDetail/>
        <div className="w-full">
        <FooterHome/>
        </div>
        </div>
    )
}
export default DetailBerita;