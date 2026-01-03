import{getData} from "../storage";
import{useNavigate} from "react-rounter-dom";
import RestaurantCard from "../RestaurantCard";
import { useState } from "react";
export default function AdminDashboard(){
    const[data,saveData]=useState(getData());
    const navigate=useNavigate();
    const handleDelete=(id)=>{
        if(!confirm("Are you sure you want to delete?")) return;
        const updated=data.filter((r)=>r.restaurantID !== id);
        saveData(updated);
        //setData(updated);
        alert("Deleted successfully");
    };
    return(
        <>
        <button onClick={()=>navigate("/admin/add")}>Add Restaurant</button>
        {data.map((r)=>(
            <RestaurantCard key={r.restaurantID}
            restaurant={r}
            onDelete={handleDelete}
            admin
            />
        ))}
        </>
    );
}