import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register:React.FC = () => {
    const [regist, setRegist] = useState({
        fullname: "",
        address: "",
        sex: "",
        username: "",
        password: "",
     });
    
    const navigate = useNavigate();
     const handleRegist = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
     ) => {
        const { name, value } = e.target;
        setRegist({ ...regist, [name]: value });//untuk menyimpan perubahan input kedalam 
     };
    
     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/api/v1/user/register", regist);
          console.log(response.data);
          console.log(regist);
          navigate('/login')
        } catch (error) {
          console.error("data error:", error);
          
        }
      };

    return(
        <div className="flex w-full bg-white h-full justify-center items-center  ">
            
            <form className=" w-96 border-2  rounded-lg my-10 shadow-md" onSubmit={handleSubmit}>
                <h1 className="text-3xl text-center mt-5 mb-10 text-lime-700"><b>Register</b></h1>
                <div className="grid gap-3 justify-items-center ">

                    <div className="grid w-4/5">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" name="fullname" className=" border-2 rounded-md h-8" value={regist?.fullname} onChange={handleRegist}/>
                    </div>

                    <div className="grid w-4/5">
                        <label htmlFor="address">Alamat</label>
                        <input type="text" name="address" className=" border-2 rounded-md h-8" value={regist?.address} onChange={handleRegist}/>
                    </div>
                     
                    <div className="grid w-4/5">
                        <label htmlFor="sex">Jenis Kelamin</label>
                        <select id="sex" name="sex" className=" border-2 rounded-md h-8 " value={regist?.sex} onChange={handleRegist}>
                            <option ></option>
                            <option value="laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                            <option value="lainnya">Lainnya</option>
                        </select>
                    </div>

                    <div className="grid w-4/5">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className=" border-2 rounded-md h-8" value={regist?.username} onChange={handleRegist}/>
                    </div>

                    <div className="grid w-4/5">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className=" border-2 rounded-md h-8" value={regist?.password} onChange={handleRegist}/>
                    </div>

                </div>
                <div className=" flex justify-center items-center my-5 ">
                <button className="w-4/5 bg-lime-700 rounded-md h-8 text-white" type="submit"><b>Submit</b></button>
                </div>


                <i><p className="text-center mt-4 mb-7"> Already have an account? <Link to="/login"  className="text-sky-600" >Login</Link></p></i>

            </form>
        </div>
    )
}
export default Register;