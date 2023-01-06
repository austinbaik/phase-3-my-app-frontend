import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Brands from './Brands.js'
import Brand from './Brand.js'
import Nav from './Nav.js';

import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {

  const [brands, setBrands] = useState([])

  function addNewWatchToStateArr(data) {

    // console.log('data in app.js function', data);
    let brandId = data.brand_id
    let watchId = data.id

    let brandObject = brands.find(brand => brand.id == brandId)
    let arrayWatchesOfBrand = brandObject.watches

    if (arrayWatchesOfBrand.find(watch => watch.id == watchId)) {
      return arrayWatchesOfBrand
    } else {
      arrayWatchesOfBrand.push(data)
      //  block of code to be executed if the condition is false
    }

    // brandObject.watches = arrayWatchesOfBrand

    const newArr = brands.map(obj => {
      if (obj.id === brandId) {
        return { ...obj, watches: arrayWatchesOfBrand };
      }

      return obj

    });

    setBrands(newArr)

  }

  function updateWatchToStateArr(data){
    // console.log("updateWatchToStateArr", data)
    let brandId = data.brand_id
    let watchId = data.id
    console.log("watchId", watchId)

    let brandObject = brands.find(brand => brand.id == brandId)
    let arrayWatchesOfBrand = brandObject.watches

    let updatedWatchesArray = arrayWatchesOfBrand.map(watch => {
      if (watch.id === data.id) {
        return data;
      } else {
        return watch
      }
      })

    console.log("updatedWatchesArray", updatedWatchesArray)


    // if (arrayWatchesOfBrand.find(watch => watch.id == watchId)) {
    //   return arrayWatchesOfBrand
    // } else {
    //   arrayWatchesOfBrand.push(data)
    //   //  block of code to be executed if the condition is false
    // }

    // brandObject.watches = arrayWatchesOfBrand

    const newArr = brands.map(obj => {
      console.log('obj', obj)
      if (obj.id === brandId) {
        return { ...obj, watches: updatedWatchesArray };
      }

      return obj

    });
    console.log("newArr checking", newArr)

    setBrands(newArr)

  }

  function deleteWatchFromStateArray(data) {

    // console.log('data in app.js function', data);
    let brandId = data.brand_id
    let watchId = data.id



    let brandObject = brands.find(brand => brand.id == brandId)
    let arrayWatchesOfBrand = brandObject.watches

    const updatedArray = arrayWatchesOfBrand.filter((watch) => watch.id !== watchId);

    const newArr = brands.map(obj => {
      if (obj.id === brandId) {
        return { ...obj, watches: updatedArray };
      }

      return obj

    });

    setBrands(newArr)

  }


  // API call to db for list of Brands 
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
        <Nav/>

        <Routes>

          <Route path="/home" element={<Home/>}/>

          <Route path="/brands" element={
            <Brands 
              brandsArr={brands} 
              setBrands={setBrands} 
            />} />

          <Route path="/brands/:brandId" element={
            <Brand
              brandsArr={brands}
              addNewWatchToStateArr={addNewWatchToStateArr}
              deleteWatchFromStateArray={deleteWatchFromStateArray}
              updateWatchToStateArr = {updateWatchToStateArr}

            />} />

          <Route path="/" element={<Home />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}
