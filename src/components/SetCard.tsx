import Card from "../elements/Card";
import ArticleCard from "../elements/ArticleCard";
import { Link } from "react-router-dom";


interface SetCard {
    isLoggedIn: boolean;
  }
const SetCard: React.FC<SetCard> = ({isLoggedIn}) => {
   
    return(
        
        <div className="flex flex-warp flex-col w-4/5 my-10">
            <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 ">
            <ArticleCard/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

            
            </div>
            {isLoggedIn ? (
                
                <div className="flex justify-center ">
                <Link to={'/addblogs'} className="bg-lime-800 text-white p-2 my-5 rounded-md"><b> Add Blogs </b></Link>
            </div>
            ):(
                <div></div>
            )}
            
        </div>
            
        
    )


};

export default SetCard;