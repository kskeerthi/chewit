import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import userContext from "../utils/userContext";

const Header = () => {
  
  const [btnName, setbtnName] = useState('Login')
  const onlineStatus = useOnlinestatus();
  const {loggedInUser} = useContext(userContext);
    return (
      <div className="flex justify-between bg-green-50 shadow-lg">
        <div className="logo">
          <img className="w-56" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online-Status{onlineStatus ? '🟢' : '🔴'}</li>
            <li className="px-4"> <Link to="/"> Home </Link></li>
            <li className="px-4"> <Link to ="/about"> About us</Link></li>
            <li className="px-4"><Link to="/contact"> Contact us</Link></li>
            <li className="px-4"><Link to="/grocery"> Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="px-4" onClick={() => {
              btnName === 'Login'?
              setbtnName('Logout'): setbtnName('Login');
            }}>{btnName}</button>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;