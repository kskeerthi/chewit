import React, {useEffect, useState} from 'react'
import { MENU_URL } from "../utils/constants";

const useRestaurantInfo = (resId) => {
    const [restInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchDataMenu();
    }, []);
    const fetchDataMenu = async () => {
        const data = await fetch(
            MENU_URL+resId
        );
        const json = await data.json();
        setRestInfo(json.data);
    };
  return restInfo;
}

export default useRestaurantInfo