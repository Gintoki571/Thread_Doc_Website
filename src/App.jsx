import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Architecture from './pages/Architecture';
import Features from './pages/Features';
import Internals from './pages/Internals';
import TechStack from './pages/TechStack';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/features" element={<Features />} />
        <Route path="/internals" element={<Internals />} />
        <Route path="/stack" element={<TechStack />} />
      </Routes>
    </Layout>
  );
}
