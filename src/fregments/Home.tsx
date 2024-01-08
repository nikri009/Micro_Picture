
import Article from "../components/Article"
import SetCard from "../components/SetCard"
import FooterHome from "../components/FooterHome"


// const Home: React.FC<NavbarProps> = ({isLoggedIn, onLogout}) =>{
//     return (
//         <div className="flex flex-col justify-center items-center w-full bg-slate-300">
//             <NavbarBF isLoggedIn={isLoggedIn} onLogout={onLogout}/>
//             <Article/>
//             <SetCard/>
//             <FooterHome/>
//         </div>
//     )
// }
const Home: React.FC = () =>{
    return (
        <div className="flex flex-col justify-center items-center w-full bg-slate-300">
            <Article/>
            <SetCard/>
            <FooterHome/>
        </div>
    )
}
export default Home;