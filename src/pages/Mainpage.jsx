import React from 'react';
import MainHeader from '../components/MainHeader';
import { Routes, Route } from 'react-router-dom';
import Netflix from './Netflix';
import SearchPage from './SearchPage';


export default function Mainpage() {

  

  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path="/search/:param" element={<SearchPage/>} />
      </Routes>
    </div>
  );
}
