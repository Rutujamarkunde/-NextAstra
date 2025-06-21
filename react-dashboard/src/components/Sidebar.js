import React, { useState } from 'react';
import './Sidebar.css';

import { FaTachometerAlt, FaVoicemail,FaTasks ,FaHandshake ,FaUserFriends ,FaCommentDots,FaEnvelope, FaCog, FaUsers, FaPhone, FaChartPie, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [openConfig, setOpenConfig] = useState(false);
  const [openReports, setOpenReports] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-logo">RICHOCHET</div>

      <ul className="sidebar-menu">
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaUsers /> Lead Management</li>
        <li> <FaCommentDots/>Text Messaging</li>
        <li><FaEnvelope /> Email Messaging</li>

        <li><FaPhone /> Call Logs</li>
                <li><FaVoicemail />Voice Mail</li>
                   <li><FaTasks  /> Tasks</li>
                      <li><FaHandshake  /> Deals</li>
                         <li><FaUserFriends  /> referals</li>

     
        <li className="sidebar-section">SETTINGS</li>

        <li onClick={() => setOpenConfig(!openConfig)}>
          <FaCog /> Configuration
        </li>
        
        <li onClick={() => setOpenConfig(!openConfig)}>
          <FaCog /> Management
        </li>
        {openConfig && (
          <ul className="sidebar-submenu">
            <li>General</li>
            <li>Users</li>
          </ul>
        )}

        <li onClick={() => setOpenReports(!openReports)}>
          <FaChartPie /> Reports
        </li>
        {openReports && (
          <ul className="sidebar-submenu">
            <li>Call history</li>
            <li>Call queue</li>
             <li>Agents Performance</li>
              <li>Commission report</li>
               <li>Scheduled report</li>
            
               <li>Chat History</li>
            <li>Performance report</li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
