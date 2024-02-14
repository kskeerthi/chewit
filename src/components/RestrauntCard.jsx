import React from "react";
import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#ccc6c6",
  };
  
const RestrauntCard = (_props) => {
    const { resData } = _props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name} - {resData.info.avgRating}</h3>
      {/* <h4>{resData.info.cuisines.join(", ")}</h4> */}
      <h4>{resData.info.costForTwo}</h4>
      {/* <h4>{resData.info.sla.slaString}</h4> */}
      <h4> {resData.info.locality}</h4>
    </div>
  );
};

export default RestrauntCard;