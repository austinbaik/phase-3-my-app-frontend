import React, { useEffect, useState } from "react";
import './App.css';
import BrandCard from './BrandCard.js';
import NewBrand from "./NewBrand";


function Brands() {

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


    return(
        <div>
            <h1>"Brands"</h1>
            
            
            //populate the Brands + Logo
            <div>
                {brands.map((brand) => {

                    return( 
                    
                    <BrandList brandObj={brand} />

                    )
                })}

            </div>

            <NewBrand newBrand={newBrand}/>
            // Form to add Brand 
            //form details: 
                //Name 
                //Url for Brand logo 
                
        </div>

    );


}


export default Brands; 