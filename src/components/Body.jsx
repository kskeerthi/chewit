import React from 'react';
import RestrauntCard from './RestrauntCard';
import resList from '../utils/mockdata';
import { useState, useEffect } from 'react';

const Body = () => {
  const [listOfRestraunts, setListofRestraunts] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () =>  {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4333686&lng=78.3664454&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setListofRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  return (
    <div className="body">
      <div className="filter">
        <button className='filter-btn' onClick={() => {
         
          const filteredList  = listOfRestraunts.filter(
            (res) => res.info.avgRating > 4.2
            );
            setListofRestraunts(filteredList);
          }}>Top Rated Restraunts</button>
      </div>
      <div className="res-containers">
        {listOfRestraunts.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))};

        {/* <RestrauntCard resName="Starbucks" cuisine="coffee, sandwitches, cold coffee"/> */}
      </div>
    </div>
  );
};

export default Body;