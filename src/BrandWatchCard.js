import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './App.css';


function BrandWatchCard({watch,brandId }) {




    function handleDeleteClick() {
        fetch(`http://localhost:9292/brands/${brandId}`, {
            method: "DELETE",

            //build out api 
        });
    }
console.log('watch: ', watch);

    return (
        <div>

            {/* <EditWatch /> */}

            {watch.name}
            <br></br>
            {watch.model_num}
            <br></br>
            {watch.price}
            <br></br>
            <img class="img"
                        src={watch.image_url}
                        alt={watch.image_url}
                    />

            <button onClick={handleDeleteClick}>
                <span role="img" aria-label="delete">
                    🗑
                </span>
            </button>
        </div>

    )

}


export default BrandWatchCard;