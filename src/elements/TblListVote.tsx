import {  Votes } from "../types/DataPaslon";

interface TypeVote {
    data:Votes[]
}
const TblListVote:React.FC<TypeVote> = ({data}) => {
    return(
        <table className="bg-white w-full ">
            <thead className="bg-slate-200">
                <tr>
                <th className="border-2 border-slate-600 text-center">No</th>
                <th className="border-2 border-slate-600 text-center">Nama</th>
                <th className="border-2 border-slate-600 text-center">Alamat</th>
                <th className="border-2 border-slate-600 text-center">Jenis Kelamin</th>
                <th className="border-2 border-slate-600 text-center">Paslon</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                <tr key={row.no}>
                    <td className="border-2 border-slate-600 text-center">{row.no}</td>
                    <td className="border-2 border-slate-600 text-center">{row.name}</td>
                    <td className="border-2 border-slate-600 text-center">{row.alamat}</td>
                    <td className="border-2 border-slate-600 text-center">{row.gender}</td>
                    <td className="border-2 border-slate-600 text-center">{row.paslon}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
export default TblListVote;