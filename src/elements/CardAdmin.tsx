import { DataPaslon } from "../types/DataPaslon"
interface DataDisplayProps {
    data:DataPaslon
  }
const CardAdmin:React.FC<DataDisplayProps> = ({data}) => {
    return (
        <div className="grid justify-items-center items-center gap-3 my-5">
            <div className="flex border-4 w-10 h-10 rounded-full justify-center items-center" >
                <p>{data.id}</p>
            </div>

            <div className="w-11/12 border-2 p-3 shadow-md">
                <div className="11/12 h-2/4">
                <img src="/src/assets/img/paslon.png" alt="gambar" className="w-full " />
                </div>
                <div className="w-11/12 h-2/4">
                    <b>{data.name}</b>
                    <p>Akumulasi : {data.akumulasi}</p>
                    <p>Jumlah Vote : {data.vote} Voters</p>
                </div>
            </div>
        </div>
    )
}

export default CardAdmin;
