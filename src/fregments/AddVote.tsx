import { useEffect, useState } from "react";
import Dummy from '../dummy/ListPaslon.json'
import {  TypePaslon } from "../types/DataPaslon";
const AddVote:React.FC = () => {
    const [selectedCandidate, setSelectedCandidate] = useState<string>();
    const [candidate,setCandidate] = useState<TypePaslon[]>([])


    useEffect(()=>{
        setCandidate(Dummy)
    },[])
  const handleCandidateSelection = (candidateId:string) => {
    setSelectedCandidate(candidateId);
  };

  const handleReset = () => {
    setSelectedCandidate("");
  };
  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    // Lakukan sesuatu dengan selectedCandidate, misalnya menyimpannya ke server
    console.log(` ${selectedCandidate}`);
  };

    return (
        <div className="grid justify-items-center">
            <b className="text-3xl text-lime-800 my-10">MASUKAN PILIHANMU</b>
            <form onSubmit={handleSubmit}>
                <div className="grid sm:flex gap-5 ">
                {candidate.map((candidate) => (
                    <div
                    key={candidate.no}
                    className={`p-2 border-2 shadow-md rounded cursor-pointer ${selectedCandidate === candidate.no ? 'bg-blue-300' : 'bg-white'}`}
                    onClick={() => handleCandidateSelection(candidate.no)}
                    >
                    
                        <div className="w-full p-3">
                            <div className="11/12 h-2/4">
                            <img src={candidate.img} alt="gambar" className="w-full h-2/4 " />
                            </div>
                            <div className="w-11/12 h-2/4 my-3">
                                <b>{candidate.name}</b>
                                <p>{candidate?.visi?.map((visi:string, index:number)=>(
                                    <p key={index}>{visi}</p>
                                ))}</p>

                                <p>koalisi:</p>
                                <ul style={{ listStyleType: 'disc' }} className="mx-5">
                                    
                                    {candidate.koalisi.map((koalisi:string, index:number)=>(
                                        <li key={index}>{koalisi}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                ))}
                </div>
                <div className="grid sm:flex px-10 my-5 gap-5">
                    <button type="button" onClick={handleReset} className="w-full sm:w-2/4 bg-red-500 text-white px-4 py-2 rounded">Reset</button>
                    <button type="submit" className=" w-full sm:w-2/4 bg-green-500 text-white px-4 py-2 rounded mr-2">Submit</button>
                </div>
            </form>

        </div>
    )
}
export default AddVote;