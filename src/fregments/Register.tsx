import { Link } from "react-router-dom";


const Register:React.FC = () => {
    return(
        <div className="flex w-full bg-white h-full justify-center items-center  ">
            
            <form className=" w-96 border-2  rounded-lg my-10 shadow-md" action="">
                <h1 className="text-3xl text-center mt-5 mb-10 text-lime-700"><b>Register</b></h1>
                <div className="grid gap-3 justify-items-center ">

                    <div className="grid w-4/5">
                        <label htmlFor="Fullname">Fullname</label>
                        <input type="text" name="FullName" className=" border-2 rounded-md h-8"/>
                    </div>

                    <div className="grid w-4/5">
                        <label htmlFor="Alamat">Alamat</label>
                        <input type="text" name="Alamat" className=" border-2 rounded-md h-8"/>
                    </div>
                     
                    <div className="grid w-4/5">
                        <label htmlFor="gender">Jenis Kelamin</label>
                        <select id="gender" name="gender" className=" border-2 rounded-md h-8">
                            <option ></option>
                            <option value="laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                            <option value="lainnya">Lainnya</option>
                        </select>
                    </div>

                    <div className="grid w-4/5">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className=" border-2 rounded-md h-8"/>
                    </div>

                    <div className="grid w-4/5">
                        <label htmlFor="username">Password</label>
                        <input type="password" name="username" className=" border-2 rounded-md h-8"/>
                    </div>

                </div>
                <div className=" flex justify-center items-center my-5 ">
                <button className="w-4/5 bg-lime-700 rounded-md h-8 text-white"><b>Submit</b></button>
                </div>


                <i><p className="text-center mt-4 mb-7"> Already have an account? <Link to="/login" className="text-sky-600" >Login</Link></p></i>

            </form>
        </div>
    )
}
export default Register;