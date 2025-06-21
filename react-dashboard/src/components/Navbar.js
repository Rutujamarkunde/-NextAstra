
import React from 'react';
import './Navbar.css';
import { FaCalendarAlt, FaBell, FaUserFriends, FaChevronDown } from 'react-icons/fa';


const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={toggleSidebar}>☰</button>
        <div className="navbar-logo"><span style={{ color: '#00C0FF' }}>RICO</span><span>CHET</span><sup style={{ fontSize: '10px' }}>360</sup></div>
      </div>

      <div className="navbar-right">
        <FaCalendarAlt className="navbar-icon" />
        <FaUserFriends className="navbar-icon" />
        <FaBell className="navbar-icon" />

       

        
        <div className="navbar-profile">
          <img
            src="" 
            alt="User"
            className="profile-img"
          />
          <span className="status">Offline</span>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
