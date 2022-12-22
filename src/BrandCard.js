import React, { useEffect, useState } from "react";
import './App.css';


function BrandCard({brand}) {
console.log("brand", brand)

function goToWatches() {
    console.log("logo clicked")
}

    return(
    <div>
        {/* populates the Brands + Logo */}
        <h2>{brand.name}</h2>
            <button> 
                <img class="img"
                src={brand.url}
                alt={brand.url}
                onClick={goToWatches}
            />
            </button>  
    </div> 
    );
}

export default BrandCard; 