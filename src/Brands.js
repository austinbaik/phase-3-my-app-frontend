import React, { useEffect, useState } from "react";
import './App.css';
import BrandCard from './BrandCard.js';
import NewBrand from "./NewBrand";
import Brand from "./Brand"


function Brands({ brandsArr, setBrands }) {

    // console.log('brandsArr0', brandsArr)
    // const [brands, setBrands] = useState([]) 


    // useEffect(() => {
    //     setBrands(brandsArr);
    //   }, [])
    //   console.log('brands', brands)

    return (
        <div >

            {/* //populate the Brands + Logo */}
            <div>
                <ul >
                    {brandsArr.map((brand) =>
                            (
                                <BrandCard 
                                    key={brand.id}
                                    brand={brand}
                                />)
                    )}
                </ul>
            </div>

            <NewBrand setBrands={setBrands} />
            {/* // Form to add Brand 
            //form details: 
                //Name 
                //Url for Brand logo  */}

        </div>

    );


}


export default Brands; 