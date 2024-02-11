import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/Auth";
import { useMutation } from "react-query";
import { LoginData } from "../types/DataPaslon";

const loginUser = async ({ username, password }:LoginData) => {
    try {
        const response = await axios.post('http://localhost:5000/api/v1/user/login',{username, password})
        const { token, user } = response.data;
        return { token, user};
    } catch (error) {
        console.log("eror get login",error)
        throw error;
    }
}

const Login:React.FC= () => {
    
    const [login, setLogin] = useState({
        username:'', 
        password:''
    })
    
    const navigate = useNavigate();
    const { login: authLogin } = useAuth();
    const { mutate } = useMutation(loginUser, {
        onSuccess: ({ token, user}) => {
            console.log("login successfull", )
            authLogin({ username:login.username, password: login.password, token, user})
            navigate('/')
        },
        onError: (error) => {
            console.error("login error",error)
        }
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value} = e.target;
        setLogin({...login, [name]: value})
        
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(login)
    }
    

    return (
        <div className="flex w-full bg-white h-full justify-center items-center min-h-screen ">
            <div>
            <form className=" w-96 border-2  rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h1 className="text-3xl text-center mt-5 mb-10 text-lime-700"><b>Login</b></h1>
                <div className="grid gap-2 justify-items-center ">
                
                    <div className="grid w-4/5">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className=" border-2 rounded-md h-8" value={login.username} onChange={handleChange}/>
                    </div>

                    <div className="grid w-4/5">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className=" border-2 rounded-md h-8" value={login.password} onChange={handleChange}/>
                    </div>

                </div>
                <div className=" flex justify-center items-center my-5 ">
                <button className="w-4/5 bg-lime-700 rounded-md h-8 text-white " type="submit"> <b> Submit </b> </button>
                </div>


                <i><p className="text-center mt-4 mb-7"> Don't have an account ? <Link to="/register" className="text-sky-600" >Register</Link></p></i>
                
            </form>
            {/* {error && <p style={{color:'red'}} className="text-center my-3">{error}</p>} */}
            </div>
        </div>
    )
}   

export default Login;


