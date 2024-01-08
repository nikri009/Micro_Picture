import Card from "../elements/Card";
import ArticleCard from "../elements/ArticleCard";
const SetCard: React.FC = () => {

    return(
        
        <div className="flex flex-warp flex-col w-4/5 my-10">
            <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 ">
            <ArticleCard/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            
        </div>
            
        
    )


};

export default SetCard;