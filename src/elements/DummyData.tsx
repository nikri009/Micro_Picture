// import { useEffect, useState } from "react";

import { DataPaslon } from "../types/DataPaslon";



interface DataDisplayProps {
    data:DataPaslon
  }

const DummyData:React.FC<DataDisplayProps> = ( {data} ) =>{
   
    return(     
                <div className="sm:flex bg-white w-4/5 p-8 gap-6">
                    <div className="flex justify-center my-5 sm:my-0">
                        <img src="/src/assets/img/Paslon.png" alt="" className="w-60" />
                    </div>
                    <div >
                        <b>Nomor Urut: {data.id}</b>
                        <h1 className="text-3xl"><b>{data.name}</b></h1>
                        <br />
                        <p>Visi & Misi :</p>
                        
                        <ul style={{ listStyleType: 'disc' }} className="mx-5" >
                            { data?.visi?.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        

                        <p>Koalisi :</p>
                        
                        <ul style={{ listStyleType: 'disc' }} className="mx-5" >
                            {data?.koalisi?.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        

                    </div>
                </div>
       
    )
}

export default DummyData;