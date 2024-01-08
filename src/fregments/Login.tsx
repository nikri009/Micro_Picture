import { useState } from "react";
import { Link } from "react-router-dom";

interface LoginProps {
    onLogin: () => void;
}

const Login:React.FC<LoginProps> = ({onLogin}) => {
    const [users, setUsers] = useState({username:'', password:''})
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value} = e.target;
        setUsers((prevUsers)=>({...prevUsers, [name]: value}))
        
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        if (users.username === 'users' && users.password === 'password'){
            onLogin();
            
        }else {
            setError('Password or username wrong')
        }
    }
    

    return (
        <div className="flex w-full bg-white h-full justify-center items-center min-h-screen ">
            <div>
            <form className=" w-96 border-2  rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h1 className="text-3xl text-center mt-5 mb-10 text-lime-700"><b>Login</b></h1>
                <div className="grid gap-2 justify-items-center ">
                
                    <div className="grid w-4/5">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className=" border-2 rounded-md h-8" value={users.username} onChange={handleChange}/>
                    </div>

                    <div className="grid w-4/5">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className=" border-2 rounded-md h-8" value={users.password} onChange={handleChange}/>
                    </div>

                </div>
                <div className=" flex justify-center items-center my-5 ">
                <button className="w-4/5 bg-lime-700 rounded-md h-8 text-white " type="submit" onClick={handleSubmit}> <Link to="/" ><b> Submit </b> </Link></button>
                </div>


                <i><p className="text-center mt-4 mb-7"> Don't have an account ? <Link to="/register" className="text-sky-600" >Register</Link></p></i>
                
            </form>
            {error && <p style={{color:'red'}} className="text-center my-3">{error}</p>}
            </div>
        </div>
    )
}

export default Login;


// if(users.username === 'admin' && users.password === '12345'){
        //     onLogin(true)
        // } else if (users.username === 'users' && users.password === 'password'){
        //     onLogin(true);
            
        // }else {
        //     setError('Password or username wrong')
        // }