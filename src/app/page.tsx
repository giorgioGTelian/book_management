import Image from "next/image";
import Counter from "./pages/counter";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}
