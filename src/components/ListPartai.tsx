import { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import Dummy from "../dummy/ListPartai.json"
import { TypePartai } from "../types/DataPaslon";
import TblListPartai from "../elements/TblListPartai";

const ListPartai:React.FC<TypePartai> = () => {
    const [partai, setPartai] = useState<TypePartai[]>([])
    useEffect(()=>{
        setPartai(Dummy)
    },[])
    
    return (
        <div>
            <NavbarAdmin/>
            <div className="grid justify-items-center">
                <b className="text-3xl text-lime-700 my-8">LIST PASLON</b>

                <div className="w-4/5 mb-10 ">
                    <TblListPartai data={partai}/>
                </div>
            </div>
        </div>
    )
}
export default ListPartai;