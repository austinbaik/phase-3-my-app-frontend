import React, { useEffect, useState } from "react";
import './App.css';



function BrandCard({brand}) {


    return(
    <div>

        // // populate the Brands + Logo
        
        <h2>{brand.name}</h2>

            <img class="img"
                src={brand.url}
                alt={brand.url}
            />  

    </div>
        
    );


}


export default BrandCard; 