import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './App.css';
import NewWatch from './NewWatch'

//rendered the individual watch cards for a given brand.id 




function Brand({ brandsArr }) {

    const { brandId } = useParams();
    // console.log("id", brandId)
    const [brandWatches, setBrandWatches] = useState([])


    // console.log(brandsArr)


    useEffect(() => {
        // console.log("brandsArr", brandsArr)
        // console.log("brandsArr.l", brandsArr.length)


        if (brandsArr.length > 0) {
            let foundBrand = brandsArr.find(brand => brand.id == brandId)
            setBrandWatches(foundBrand)
        }
    }, [brandsArr])


    // creates useEffect that runs when brandsArr changes 
    // once it changes, find the particular brand by Id 

    // set state with the array? 
    //.find on the Id
    // then render the watches 
    // 


  
    console.log(brandWatches)
    return (

        <div>


            <h1>Watches</h1>  {/* rename later to bring in Brand name param  */}

            {/* map through the watches in the brand and render the cards 
            
            <BrandWatchCard/> */}
            <div>
            {brandWatches.name}
            </div>


            <NewWatch brandId={brandId}/>  {/* need to pass down brand_id */}

        </div>
    );


}


export default Brand; 