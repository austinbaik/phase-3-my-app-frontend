import React, { useEffect, useState } from "react";
import './App.css';


function Brands() {

    const [brands, setBrands] = useState([]) 

        // API call to db for list of Brands 

    useEffect(() => {
        fetch("http://localhost:9292/brands")
          .then((r) => r.json())
          .then((brands) => setBrands(brands));
      }, [])


    return(
    <div>
        <h1>"Brands"</h1>

        // // populate the Brands + Logo

        // 


            <img class="img"
                src=""
                alt=""
            />  

        // Form to add Brand 
        //form details: 
            //Name 
            //Url to Brand logo 
            
        </div>
        
    );


}


export default Brands; 