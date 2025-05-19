
import React from 'react';
import '../styles/Navbar.css';
import userImg from '../assets/user.jpg'; 


const Navbar = () => {
  return (
    <header className="navbar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <img src={userImg} alt="User" className="user-avatar" />
    </header>
  );
};

export default Navbar;
