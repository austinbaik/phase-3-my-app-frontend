import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Brands from './Brands.js'
import Brand from './Brand.js'

import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {

  const [brands, setBrands] = useState([]) 
  //when new brand is added, make POST api call, then send the new brand up to *THIS* parent component 
  //add to the 'brands' array setBrands[...brands, newBrand] which updates this component 




      // API call to db for list of Brands 
      // more to App.js
  useEffect(() => {
      fetch("http://localhost:9292/brands")
        .then((r) => r.json())
        .then((brands) => setBrands(brands));
    }, [])
  
  return (
  <div>
    <BrowserRouter>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          <Route path="/brands" element = {<Brands brandsArr={brands} setBrands={setBrands}/>} />
          
          <Route path="/brand/:brandId" element={<Brand brandsArr={brands}/>} />


          {/* <Route path="/brand[:id]">
            <Favorites />
          </Route> */}

          <Route path="/" element={<Home />} />

        </Routes>
    
    </BrowserRouter> 
     </div>
  );
}
