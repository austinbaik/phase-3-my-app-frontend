import React, { useEffect, useState } from "react";
import './App.css';
import BrandCard from './BrandCard.js';
import NewBrand from "./NewBrand";


function Brands({ brandsArr }) {

    console.log('brandsArr0', brandsArr[0])
    // const [brands, setBrands] = useState([]) 


    // useEffect(() => {
    //     setBrands(brandsArr);
    //   }, [])
    //   console.log('brands', brands)

    return (
        <div>
            <h1>Brands</h1>

            {/* //populate the Brands + Logo */}
            <div>
                <ul>
                    {brandsArr.map((brand) =>
                            (
                                <BrandCard
                                    key={brand.id}
                                    brand={brand}
                                />)
                    )}
                </ul>
            </div>

            <NewBrand/>
            {/* // Form to add Brand 
            //form details: 
                //Name 
                //Url for Brand logo  */}

        </div>

    );


}


export default Brands; 