import React from "react";
import { CDN_URL } from "../utils/constants";

  
const RestrauntCard = (_props) => {
    const { resData } = _props;
  return (
    <div className="res-card m-4 p-4 w-[260px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name} - {resData.info.avgRating}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
      <h4> {resData.info.locality}</h4>
    </div>
  );
};

export const withFlatDealLabel = (RestrauntCard) => {
  return (props) =>  {
    return (
      <div>
        <label className="absolute bg-black text-white mx-3 p-2 rounded-lg">Promoted</label>
        <RestrauntCard {...props}/>
      </div>
    )
  }
}

export default RestrauntCard;