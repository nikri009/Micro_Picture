
import axios from "axios";
import { useState } from "react";
import { TypeBlogs } from "../types/DataPaslon";
import { useAuth } from "../auth/Auth";


const AddBlogs:React.FC = () => {
    const [formData, setFormData] = useState<TypeBlogs>({
        title: "",
        description: "",
        image: "",
        author:""
      });
      
    const { user } = useAuth();

    const getToken = (): string|null => {
        return localStorage.getItem("authToken")
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(formData)
        
        try {

            const token = getToken();
            if(!token){
                console.log("token nya gk ada")
                
                return;
            }

            const { fullname } = user || {};
            setFormData((prevData)=>({
                ...prevData, 
                author: fullname || "",
            }))
            
            const response = await axios.post(
                'http://localhost:5000/api/v1/blogs/add',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
            console.log(response.data)

        } catch (error) {
            console.log("eror disini ",formData)
            console.log(user)
            
            console.log("eror disini ",error)
        }
        
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target instanceof HTMLInputElement) {
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
          }
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };




    return (
        <div>
            
            <div className="grid justify-items-center">
                <b className="text-3xl text-lime-700 my-8">ADD BLOGS</b>

                <div className="w-2/4 mb-10">
                    <form action="" className="sm:flex w-full h-full" onSubmit={handleSubmit}>
                        <div className="grid sm:w-1/2 w-full">
                            <input type="file" accept="image/*"  onChange={handleImageChange} />
                            {formData.image && (
                                <div>
                                    
                                    <img src={formData.image} alt="Preview" style={{ width: '90%', height: '90%' }} />
                                </div>
                                )}
                        </div>
                        <div className="grid sm:w-1/2 w-full h-full">
                        <label htmlFor="title"><b>Title</b></label>
                        <input type="text" name="title" className="border-2 h-10 rounded-lg " onChange={handleChange}/>
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea name="description" className="border-2  h-28 rounded-lg" onChange={handleChange}></textarea>
                        {/* <input type="textarea" name="description" className="border-2  h-10 rounded-lg"/> */}
                        
                        <button className="w-full  bg-lime-800 rounded-lg text-white my-4 h-9"><b> Submint</b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddBlogs;