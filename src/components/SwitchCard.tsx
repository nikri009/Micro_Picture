import { useState, useEffect } from "react"
import DummyData from "../elements/DummyData"
import Dummy from "../dummy/Paslon.json"
import { DataPaslon } from "../types/DataPaslon"
import React from "react"


const TombolSwitch:React.FC = () => {
  const [core, setCore] = useState<DataPaslon>([])
  const [dataIndex, setDataIndex] = useState<number>(0)
  
  
  useEffect(()=>{
      setCore(Dummy[dataIndex])
  },[dataIndex])
  
  
  
    return(
        <div className="bg-slate-300 p-10">
            <h1 className="text-4xl text-lime-700 text-center mt-12"><b>INFO PASLON</b></h1>
            <div className="flex w-full justify-center gap-4 items-center rounded-4 my-10">
                <img src="/src/assets/img/left-arrow.png" alt="" className="w-10  rounded-full bg-white p-2" style={{ cursor: 'pointer' }} onClick={()=> setDataIndex((i)=>i-1)}/>

                <DummyData data={core}/>

                <img src="/src/assets/img/right-arrow.png" alt=""  className="w-10  rounded-full bg-white p-2" style={{ cursor: 'pointer' }} onClick={()=> setDataIndex((i)=>i+1)}/>
            </div>
        </div>
    )
}
export default TombolSwitch;