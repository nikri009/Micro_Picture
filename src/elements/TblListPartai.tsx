import { TypePartai } from "../types/DataPaslon";

interface partai{
    data:TypePartai[]
}

const TblListPartai:React.FC<partai> = ({data}) => {
    return(
        <table className="bg-white w-full ">
            <thead className="bg-slate-200">
                <tr>
                <th className="border-2 border-slate-600 text-center">No</th>
                <th className="border-2 border-slate-600 text-center">Logo</th>
                <th className="border-2 border-slate-600 text-center">Ketua Umum</th>
                <th className="border-2 border-slate-600 text-center">Visi & Misi</th>
                <th className="border-2 border-slate-600 text-center">Almaat</th>
                </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.no}>
                    <td className="border-2 border-slate-600 text-center">{row.no}</td>
                    <td className="border-2 border-slate-600 ">
                    <img src={row.img} alt={`Image ${row.no}`} style={{ width: '100%', height: '100px' }} />
                    </td>
                    <td className="border-2 border-slate-600 text-center">{row.name}</td>
                    <td className=" border-2 border-slate-600 text-justify ">
                        {row.visi.map((item,index)=>(
                            <li key={index} className="mx-2">{item}</li>
                        ))}
                    </td>
                    <td className="border-2 border-slate-600 text-justify p-2">
                        {row.alamat}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
export default TblListPartai;