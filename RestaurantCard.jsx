import{useNavigate} from "react-router-dom";
export default function RestaurantCard({restaurant,onDelete,admin}){
    const navigate=useNavigate();
    return(
        <div>
            <img src={restaurant.image} width="200"/>
            <h3>{restaurant.restaurantName}</h3>
            <p>{restaurant.address}</p>
            <p>{restaurant.type}</p>
            <p>{restaurant.parkingLot ? "Parking Available" : "No Parking"}</p>
            {admin && (
                <>
                <button onClick={()=>navigate(`/admin/update/${restaurant.restaurantID}`)}>
                    Update
                </button>
                <button onClick={()=>onDelete(restaurant.restaurantID)}>Delete</button>
                </>
            )}
        </div>
    );
}