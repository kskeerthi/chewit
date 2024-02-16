import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

const { resId } = useParams();
const restInfo = useRestaurantInfo(resId);

   
   if(restInfo == null )  return (<Shimmer />);
    const {name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(restInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR);
    const categories = restInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      ( c => 
        c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    );
  return (
    <div className="menu text-center"> 
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <h2 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h2>
    <h2>Menu</h2>
    {/* <ul>
        {itemCards.map(key => <li key={key.card.info.id}>{key.card.info.name} - {"Rs."} {key.card.info.price/100 || key.card.info.defaultPrice /100}</li>)}
        
    </ul> */
    }
    {categories.map((category) => 
      <RestaurantCategory key={category?.card?.card?.id} data={category?.card?.card}/>
    )}
    </div>
  );
}

export default RestaurantMenu;