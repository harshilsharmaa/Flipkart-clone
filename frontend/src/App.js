import './App.css';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import CategoryHeader from './components/CategoryHeader/CategoryHeader';
import FilterSection from './components/FilterSection/FilterSection';
import ProductSection from './components/ProductSection/ProductSection';


function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <CategoryHeader/>
        
      </div>
    </div>
  );
}

export default App;
