import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './App.css';
import NewWatch from './NewWatch'

//rendered the individual watch cards for a given brand.id 




function Brand(brandsArr) {

    const { brandId } = useParams();
    console.log("id", brandId)


    console.log(brandsArr)

    // set state with the array? 
    //.find on the Id
    // then render the watches 
    // 

    let arrMatchingBrandId = brandsArr
    console.log('arr', arrMatchingBrandId)

    console.log("test", arrMatchingBrandId.length)








    return (

        <div>


            <h1>Watches</h1>
            {/* rename later to bring in Brand name param  */}

            {/* map through the watches in the brand and render the cards 
            
            <BrandWatchCard/>

            // function handleDeleteClick() {
                //     fetch(`http://localhost:9292/brands/${id}`, {
                //         method: "DELETE",
                //     });

             <button onClick={handleDeleteClick}>
                    <span role="img" aria-label="delete">
                        🗑
                    </span>
                </button>


            name
            img 
            price 
            model # 
            
            [button to delete]
            [button to edit]
            
            <EditWatch />


            */}


            <NewWatch />
            {/* need to pass down brand_id */}

        </div>
    );


}


export default Brand; 