import FooterVote from "../components/FooterVote";
import InfoVote from "../components/InfoVote";

import SwitchCard from "../components/SwitchCard";




const Vote: React.FC = () => {
    return (
        <div className="w-full">
        
        <InfoVote/>
        <SwitchCard/>
        <FooterVote/>
        </div>
    )
}

export default Vote;