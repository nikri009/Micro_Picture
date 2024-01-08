import { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import { TypePaslon } from "../types/DataPaslon";
import Dummy from "../dummy/ListPaslon.json"
import TblPaslon from "../elements/TblPaslon";

const ListPaslon:React.FC<TypePaslon> = () => {
    const [List,setListPaslon] = useState<TypePaslon[]>([])
    useEffect(()=>{
        setListPaslon(Dummy)
    },[])

    
    return (
        <div>
            <NavbarAdmin/>
            <div className="grid justify-items-center">
                <b className="text-3xl text-lime-700 my-8">LIST PASLON</b>

                <div className="w-4/5 mb-10 ">
                <TblPaslon data={List}/>
                </div>
            </div>
        </div>
    )
}

export default ListPaslon;