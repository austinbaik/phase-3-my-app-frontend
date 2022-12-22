import React, { useEffect, useState } from "react";
import './App.css';
import BrandCard from './BrandCard.js';
import NewBrand from "./NewBrand";


function Brands({arrBrandsObj}) {




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