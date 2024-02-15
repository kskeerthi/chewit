import React from 'react';
import RestrauntCard from './RestrauntCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlinestatus';


const Body = () => {
  const [listOfRestraunts, setListofRestraunts] = useState([]);
  const [filteredRestraunts, setfilteredRestraunts] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData()
  }, [])

  console.log("Body rendered");

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
      <div className="filter">
        <div className='search'>
          <input type="text" className='search-box' value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }} />
          <button onClick={() => {
            console.log(searchText);
            const filteredRestaurants = listOfRestraunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredRestraunts(filteredRestaurants);
          }}>Search</button>
        </div>
        <div className='button-filter'>
          <button className='filter-btn' onClick={() => {

            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilteredRestraunts(filteredList);
          }}>Top Rated Restraunts</button>
        </div>
      </div>
      <div className="res-containers">
        {filteredRestraunts.map((restraunt) => (
          <Link key={restraunt.info.id} to={'/restaurant/' + restraunt.info.id}><RestrauntCard key={restraunt.info.id} resData={restraunt} /></Link>
        ))}

        {/* <RestrauntCard resName="Starbucks" cuisine="coffee, sandwitches, cold coffee"/> */}
      </div>
    </div>
  );
};

export default Body;