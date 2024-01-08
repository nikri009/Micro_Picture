import React from "react";
const Card: React.FC = () => {
    return (
     <>
     
        <div className="flex flex-col  items-center max-w-1/3 bg-white">
                <img src="/src/assets/img/gambarCard.png" alt="" className="w-full h-52 m-0 p-0"/>
                <div className="mx-3 my-3">
                    <div className="flex w-48 h-8 bg-red-600 justify-center  items-center rounded-md mb-1">
                        <b>SENIN, 03 JAN 2023</b>
                    </div>
                    <p className="text-2xl"><b>KPU TETAPKAN 3 MENTOR TERBAIK</b><br/> Super Admin</p>
                </div>
        </div>
        
    </>
    )
}


export default Card;