import React, { useEffect, useState } from "react";
import './App.css';

//component for new Watch submission form 


function NewWatch({ }) {


    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [price, setPrice] = useState("")
    const [modelNum, setModelNum] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`"http://localhost:9292/brands/${id}"`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                url: imageUrl,
                price: price,
                model_num: modelNum
            }),
        })
            .then(response => response.json())
            .then(data => {

                //need to send the return object up to App to update State 
                console.log('Success:', data);
                setName("")
                setImageUrl("")
                setPrice("")
                setModelNum("")
            })

    }



    function handleNameChange(e) {
        setName(e.target.value)
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


    return (


        <div>

            <h2> Submit New Watch </h2>

            <form onSubmit={handleSubmit}>

                <label>
                    Name:
                    <input type="text" onChange={handleNameChange} value={name} />
                </label>
                Image Url Link:
                <input type="text" onChange={handlePriceChange} value={imageUrl} />
                Price:
                <input type="text" onChange={handleUrlChange} value={price} />
                Model Number:
                <input type="text" onChange={handleModelNum} value={modelNum} />

                <button type="submit">Submit</button>

            </form>

        </div>

    );

}


export default NewWatch; 