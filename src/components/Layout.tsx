
import React, { type PropsWithChildren } from 'react';
import Aside from './Aside';
import Navbar from './Navbar';
import '../styles/Layout.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      <Aside />
      <div className="main-content">
        <Navbar />
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
