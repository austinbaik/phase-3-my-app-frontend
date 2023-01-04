import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './App.css';


function BrandCard({ brand }) {
    console.log("brand", brand)



    return (
        <div > 
            
            {/* populates the Brands + Logo */}
            <h2 class="center">{brand.name}</h2>
            {/* brand.id */}

            {/* use react-router-dom Link component  
        should be a link */}

            <Link to={`/brand/${brand.id}`} brand={brand}>

                <button class="center-img"> 
                    <img class="img"
                        src={brand.url}
                        alt={brand.url}
                    />
                </button>

            </Link>

        </div>
    );
}

export default BrandCard; 