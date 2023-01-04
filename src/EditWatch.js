import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './App.css';


function EditWatch({ 
    name, 
    id, 
    modelNum, 
    price, 
    imageUrl,
    updateWatchToStateArr,
    setIsEditing
 }) {

    const [watchName, setWatchName] = useState(name);
    // const [watchId, setWatchId] = useState(id);
    const [watchModelNum, setModelNum] = useState(modelNum);
    const [watchPrice, setPrice] = useState(price);
    const [watchImageUrl, setImageUrl] = useState(imageUrl);

    function handleNameChange(e) {
        setWatchName(e.target.value)
    }
    function handleUrlChange(e) {
        setImageUrl(e.target.value)
    }
    function handlePriceChange(e) {
        setPrice(e.target.value)
    }
    function handleModelNum(e) {
        setModelNum(e.target.value)
    }

    //send PATCH request to update the watch object; receives json response, then updates state 
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/brands/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: watchName,
                image_url: watchImageUrl,
                price: watchPrice,
                model_num: watchModelNum
            })

        })
            .then(response => response.json())
            .then(data => {
                console.log("patch success", data)
                updateWatchToStateArr(data)
                setIsEditing()
            })

        //         //need to send the return object up to App to update State 
        //         console.log('Success:', data);
        //         addNewWatchToStateArr(data)
        //         // setWatchFormData(
        //         //     {
        //         //         name: "",
        //         //         image_url: "",
        //         //         price: "",
        //         //         model_num: "",
        //         //         brand_id: brandId
        //         //     }
        //         // )
        //     })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <h2> Edit {name} </h2>

                <label>
                    Name:
                    <input type="text" name='name' onChange={handleNameChange} value={watchName} />
                </label>
                Price:
                <input type="text" name='price' onChange={handlePriceChange} value={watchPrice} />
                Image Url Link:
                <input type="text" name='imageUrl' onChange={handleUrlChange} value={watchImageUrl} />
                Model Number:
                <input type="text" name='model_num' onChange={handleModelNum} value={watchModelNum} />

                <button type="submit">Submit</button>

            </form>

        </div>


    )

};



export default EditWatch;