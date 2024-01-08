import NavbarAdmin from "../components/NavbarAdmin";
import { useState } from "react";

interface AddPartai {
    name: string;
    noUrut: number;
    visi: string;
    image: string;
    alamat:string;
  }

const AddPartai:React.FC = () => {
    const [formData, setFormData] = useState<AddPartai>({
        name: '',
        noUrut: 0,
        visi: '',
        image: '',
        alamat:'',
      });



    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setFormData((prevData) => ({
              ...prevData,
              image: reader.result as string,
            }));
          };
          reader.readAsDataURL(file);
          
        }
      };


    return (
        <div>
            <NavbarAdmin />
            <div className="grid justify-items-center">
                <b className="text-3xl text-lime-700 my-8">ADD PASLON</b>

                <div className="w-2/4 mb-10 ">
                    <form action="" className="sm:flex w-full">
                        <div className="grid sm:w-1/2 w-full">
                            <input type="file" accept="image/*" onChange={handleImageChange}/>
                            {formData.image && (
                                <div>
                                    
                                    <img src={formData.image} alt="Preview" style={{ width: '90%', height: '90%' }} />
                                </div>
                                )}
                        </div>
                        <div className="grid sm:w-1/2 w-full">
                        <label htmlFor="name"><b>Nama</b></label>
                        <input type="text" name="name" className="border-2 h-10 rounded-lg "/>
                        <label htmlFor="no"><b>No Urut</b></label>
                        <input type="number" name="no" className="border-2  h-10 rounded-lg"/>
                        <label htmlFor="visi"><b>Visi Misi</b></label>
                        <textarea name="visi" className="border-2  h-20 rounded-lg"/>
                        <label htmlFor="alamat"><b>Alamat</b></label>
                        <textarea name="alamat" className="border-2  h-20 rounded-lg"/>
                        <button className="w-full  bg-lime-800 rounded-lg text-white my-4 h-9"><b> Submint</b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddPartai;