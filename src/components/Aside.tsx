
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Aside.css';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside-profile">Admin Dashboard</div>
      <nav className="aside-nav">
        <NavLink to="/">Profile</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/all-files">All Files</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <button className="logout">Log Out</button>
    </aside>
  );
};

export default Aside;
