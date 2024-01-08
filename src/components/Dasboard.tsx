import CardAdmin from "../elements/CardAdmin";
import { DataPaslon } from "../types/DataPaslon";
import { useState,useEffect } from "react";
import Dummy from "../dummy/Paslon.json"

const Dasboard:React.FC = () =>{
    const [paslon, setPaslon] = useState<DataPaslon[]>([]);

    useEffect(()=>{
        setPaslon(Dummy)
    },[]);
  
    
  

    return (
        <div className="grid justify-items-center gap-3 my-3 mx-3 h-full">
            <b className="text-lime-700 text-3xl my-6">DASBOARD</b>
            <div className="sm:flex w-3/4 h-3/4 mb-10">
                
                {paslon.map((data:DataPaslon, index:number)=>{
                    return (
                        <div key={index}>
                            <CardAdmin data={data}/>
                        </div>
                    )
                    })}
                {/* <CardAdmin/>
                <CardAdmin/> */}
            
            </div>
            
        </div>
    )
}
export default Dasboard;