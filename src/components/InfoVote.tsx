

import PieChart from "../elements/PieChart";


const InfoVote:React.FC = () =>{
 
    return(
        <div className="grid  items-center w-full bg-white gap-3 justify-items-center p-4">

            <div className="text-lime-700 text-3xl my-10 text-center w-full">
                <h1><b>INFO PEMILU TERUPDATE</b></h1>
            </div>


            <div className="grid sm:flex text-center items-center justify-items-center w-full sm:h-96 ">

                <div className="w-1/2 ">
                    <PieChart/>
                </div> 


                <div className=" justify-center  w-1/2 ">
                <div className="flex  w-full sm:w-5/6 bg-red-500 p-4 gap-2 rounded-sm my-2" >
                    <div className="  w-1/5 border-2 bg-orange-950 text-white">
                        <p>No.</p>
                        <p>paslon</p>
                        <p>3</p>
                    </div>
                    <div >
                        <p><b>CINTRA SURYA PALOH </b></p>
                        <p className="text-left"><b>78%</b></p>
                    </div>
                </div>
                <div className="flex w-full sm:w-5/6 bg-yellow-300 p-4 gap-3 rounded-sm my-2" >
                    <div className="w-1/5 border-2 bg-yellow-800 text-white">
                        <p>No.</p>
                        <p>paslon</p>
                        <p>1</p>
                    </div>
                    <div >
                        <p><b>SURYA SURYA </b></p>
                        <p className="text-left"><b>45%</b></p>
                    </div>
                </div>
                    <div className="flex w-full sm:w-5/6 bg-sky-600 p-4 gap-3 rounded-sm my-2" >
                    <div className="w-1/5 border-2 bg-sky-900 text-white">
                        <p>No.</p>
                        <p>paslon</p>
                        <p>2</p>
                    </div>
                    <div >
                        <p><b>CINTRA</b></p>
                        <p className="text-left"><b>25%</b></p>
                    </div>
                </div>
                
                </div>

            </div>
            <div className="grid justify-items-center bg-lime-700 text-white rounded-sm h-10 w-1/3 text-center items-center my-4">
                <button><b>MASUKAN SUARAMU</b></button>
            </div>


        </div>
    )
}

export default InfoVote;