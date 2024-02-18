import React from 'react';
import RestrauntCard , {withFlatDealLabel} from './RestrauntCard';
import Shimmer from './Shimmer';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlinestatus';
import userContext from '../utils/userContext';


const Body = () => {
  const [listOfRestraunts, setListofRestraunts] = useState([]);
  const [filteredRestraunts, setfilteredRestraunts] = useState([]);
  const [searchText, setsearchText] = useState("");
  const { loggedInUser, setUserName} = useContext(userContext);
  
  useEffect(() => {
    fetchData()
  }, [])
  const RestaurantWithFlatDeal = withFlatDealLabel(RestrauntCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4333686&lng=78.3664454&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setListofRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  };
  const onlineStatus = useOnlinestatus();
  if (onlineStatus == false)
    return (
      <h1>Looks like you are offline!!!Please check internet connection.</h1>
    );
  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className='search m-4 p-4'>
          <input type="text" className='border border-solid border-black' value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }} />
          <button className="px-4 py-2 bg-green-100 m-4" onClick={() => {
            const filteredRestaurants = listOfRestraunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredRestraunts(filteredRestaurants);
          }}>Search</button>
        </div>
        <div className='search m-4 p-4 flex items-center '>
        <button className=" bg-gray-100 px-4 py-2 rounded-lg"  onClick={() => {

          const filteredList = listOfRestraunts.filter(
            (res) => res.info.avgRating > 4.2
          );
          setfilteredRestraunts(filteredList);
        }}>Top Rated Restraunts</button>

      </div>
      <div className='search m-4 p-4 flex items-center '>
        <label>Username: </label>
      <input type="text" className='border border-solid border-black' value={loggedInUser} />
      </div>
      </div>
      <div className="res-containers flex flex-wrap">
        
        {filteredRestraunts.map((restraunt) => (
          <Link key={restraunt.info.id} to={'/restaurant/' + restraunt.info.id}>
          {(restraunt.info.avgRating >= 4.5) ? 
          (<RestaurantWithFlatDeal  key={restraunt.info.id} resData={restraunt}/>
          ) : 
          (<RestrauntCard key={restraunt.info.id} resData={restraunt} />
          )}
          
          </Link>
        ))}

        {/* <RestrauntCard resName="Starbucks" cuisine="coffee, sandwitches, cold coffee"/> */}
      </div>
    </div>
  );
};

export default Body;