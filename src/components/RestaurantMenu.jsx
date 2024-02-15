import useRestaurantInfo from "../utils/useRestaurantInfo";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

const { resId } = useParams();
const restInfo = useRestaurantInfo(resId);

   
   if(restInfo == null )  return (<Shimmer />);
    const {name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  

  return (
    <div className="menu"> 
    <h1>{name}</h1>
    <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
    <h2>Menu</h2>
    <ul>
        {itemCards.map(key => <li key={key.card.info.id}>{key.card.info.name} - {"Rs."} {key.card.info.price/100 || key.card.info.defaultPrice /100}</li>)}
        
    </ul>
    </div>
  );
}

export default RestaurantMenu;