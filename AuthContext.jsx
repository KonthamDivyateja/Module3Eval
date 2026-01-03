import { Children, createContext,useContext,useState } from "react";
const AuthContext=createContext();
const user={
    admin:{email:"admin@gmail.com",password:"admin1234",role:"admin"},
    customer:{
        email:"customer@gmail.com",
        password:"customer1234",
        role:"customer",
    },
};
export const AuthProvider =({Children})=>{
    const[users,setUser]=useState(
        JSON.parse(localStorage.getItem("user"))  || null
    );
    const login=(email,password)=>{
        const found=Object.values(users).find((u)=>u.email===email && u.password===password);
        if(!found) return false;
        setUser(found);
        localStorage.setItem("user",JSON.stringify(found));
        return true;
    };
    const logout=()=>{
        setUser(null);
        localStorage.removeItem("user");
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {Children}
        </AuthContext.Provider>
    );
};
export const useAuth=()=> useContext(AuthContext);