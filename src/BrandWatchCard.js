import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './App.css';


function BrandWatchCard() {


    // function handleDeleteClick() {
    //         fetch(`http://localhost:9292/brands/${id}`, {
    //             method: "DELETE",
    //         });

    
    return (
        <div>

            {/* <EditWatch /> */}


            <button onClick={handleDeleteClick}>
                <span role="img" aria-label="delete">
                    🗑
                </span>
            </button>
        </div>

    )

}


export default BrandWatchCard;