import { useState
 } from "react";
 import{useNavigate} from "react-router-dom";
 import{useAuth} from "../AuthContext";
 export default function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {login}=useAuth();
    const navigate=useNavigate();
    const handleLogin=()=>{
        if(!login(email,password)){
            alert("Invalid credentials");
            return;
        }
        email.includes("admin")
        ? navigate("/admin/dashboard")
        : navigate("/customers/dashboard");
    };
    return(
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
 }