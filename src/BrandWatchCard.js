import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './App.css';
import EditWatch from "./EditWatch";


function BrandWatchCard({ watch, brandId, deleteWatchFromStateArray}) {

    console.log("watch", watch);
    console.log("watchId", watch.id);

    const [isEditing, setIsEditing] = useState(false);

    let watchId = watch.id 
    console.log("watchId", watch.id);


    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/brands/${watchId}`, {

            method: "DELETE",
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({
            //     id: watchId,

            // }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Successfully Deleted', data);
                //pass the object up to App.js as a function call, if exists in state, delete from state
                deleteWatchFromStateArray(data)
            })

    }

    return (
        <div>

            {/* Code for EditWatch */}

            {/* {isEditing ? (
                <EditWatch
                    id={watch.id}
                    modelNum={watch.model_num}
                    price={watch.price}
                    imageUrl={watch.image_url}

                    onUpdateMessage={handleUpdateMessage}
                />
            ) : (
                <p>{body}</p>
            )} */}


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



            {/* add the Edit button */}

            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </button>

            <button onClick={handleDeleteClick}>
                <span role="img" aria-label="delete">
                    🗑
                </span>
            </button>

        </div>

    )


}

export default BrandWatchCard;