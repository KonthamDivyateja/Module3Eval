import{getData, saveData} from "../storage";
import{useNavigate} from "react-router-dom";
import { useState } from "react";
export default function AddRestaurant(){
    const navigate=useNavigate();
    const[form,setForm]=useState({
        restaurantName:"",
        address:"",
        type:"Rajasthani",
        parkingLot:false,
        image:""
    });
    const handleAdd=()=>{
        const data=getData();
        const newRes={
            ...form,
            restaurantID:Date.now(),
        };
        saveData([...data,newRes]);
        alert("Restaurant added");
        navigate("/admin/dashboard");
    };
    return(
        <>
        <input placeholder="Name" onChange={(e)=>setForm({...form,restaurantName:e.target.value})} />
        <input placeholder="Address" onChange={(e)=>setForm({...form,address:e.target.value})} />
        <select onChange={(e)=>setForm({...form,type:e.target.value})}>
            <option>Rajasthani</option>
            <option>Gujarathi</option>
            <option>Mughlai</option>
            <option>South Indian</option>
            <option>North Indian</option>
        </select>
        <button onClick={handleAdd}>Add</button>
        </>
    )
}