import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
  
  const [btnName, setbtnName] = useState('Login')
  const onlineStatus = useOnlinestatus();
  useEffect(() => {
    console.log("useEffect called in header");
  },[])
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>{onlineStatus ? '🟢' : '🔴'}</li>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to ="/about"> About us</Link></li>
            <li><Link to="/contact"> Contact us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              btnName === 'Login'?
              setbtnName('Logout'): setbtnName('Login');
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;