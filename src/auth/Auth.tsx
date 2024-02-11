
import { createContext, useContext } from 'react';
import { useQueryClient } from 'react-query';
import { User } from '../types/DataPaslon';

const AuthContext = createContext<{
    login: (data: { username: string, password: string ,token:string , user:User }) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
    user:User|null;
  } | undefined>(undefined);

export const AuthProvider:React.FC<{children:React.ReactNode}> = ({ children }) => {
    const queryClient = useQueryClient();

    const login = (data: { username: string, password: string , token:string, user:User}) => {
        localStorage.setItem("authToken", data.token)
        localStorage.setItem("user", JSON.stringify(data.user));
        queryClient.invalidateQueries("akun");
       console.log(data)
    }

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        queryClient.invalidateQueries("akun");
    }

    const isLoggedIn = () => {
        return !!localStorage.getItem("authToken");
    
        // const userString = localStorage.getItem("authToken");
        // if (!userString) {
        //     return false; // Tidak ada data pengguna, menandakan tidak login
        // }
        // const user = JSON.parse(localStorage.getItem("user") || null);
        // try {
        //     const user = JSON.parse(userString);
    
        //     // Tambahkan kondisi tambahan untuk memeriksa integritas data pengguna
        //     return !!user && user.username && user.password;
        // } catch (error) {
        //     console.error("Kesalahan parsing data pengguna:", error);
        //     return false; // Kesalahan parsing data pengguna, menandakan tidak login
        // }
    }
    const user = JSON.parse( localStorage.getItem("user") || "null")
    
    return (
        <AuthContext.Provider value={{ login, logout, isLoggedIn, user}}>
            {children}
        </AuthContext.Provider>
    )
}

  
  export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  };