import { useEffect, useState } from "react";
import TblListVote from "../elements/TblListVote";
import {  Votes,  } from "../types/DataPaslon";
import DataVote from "../dummy/DataVote.json"

const ListVote:React.FC<Votes> = () => {
    const [vote, setVote] = useState<Votes[]>([])

    useEffect(() => {
        setVote(DataVote)
    },[])

    
    return (
        <div className="grid w-full h-2/4 bg-slate-300 justify-items-center">
            <b className="text-lime-700 text-3xl my-6">LIST VOTER</b>

            <div className="w-4/5 mb-10 ">
                <TblListVote data={vote}/>
                <b className="text-2xl">TOTAL SUARA TERKUMPUL : 1000 Voter</b>
            </div>
            
        </div>
    )
}
export default ListVote;