
import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import History from './pages/History';
import AllFiles from './pages/AllFiles';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/history" element={<History />} />
        <Route path="/all-files" element={<AllFiles />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};

export default App;
