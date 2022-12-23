import React, { useEffect, useState } from "react";
import './App.css';

//component for new Watch submission form 


function NewWatch({ brandId }) {


    console.log('brandId: ', brandId);
    // const [name, setName] = useState("")
    // const [imageUrl, setImageUrl] = useState("")
    // const [price, setPrice] = useState("")
    // const [modelNum, setModelNum] = useState("")

    const [watchFormData, setWatchFormData] = useState({
        name: "",
        image_url: "",
        price: "",
        model_num: "",
        brand_id: brandId
    })

    const { name, image_url, price, model_num } = watchFormData


    const handleChange = (e) => {
        setWatchFormData({ ...watchFormData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/brands/${brandId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(watchFormData)

        })
            .then(response => response.json())
            .then(data => {

                //need to send the return object up to App to update State 
                console.log('Success:', data);
                setWatchFormData(
                    {
                        name: "",
                        image_url: "",
                        price: "",
                        model_num: "",
                        brand_id: brandId
                    }
                )
            })

    }



    // function handleNameChange(e) {
    //     setName(e.target.value)
    // }
    // function handleUrlChange(e) {
    //     setImageUrl(e.target.value)
    // }
    // function handlePriceChange(e) {
    //     setPrice(e.target.value)
    // }
    // function handleModelNum(e) {
    //     setModelNum(e.target.value)
    // }


    return (

        <div>

            <h2> Submit New Watch </h2>

            <form onSubmit={handleSubmit}>

                <label>
                    Name:
                    <input type="text" name='name' onChange={handleChange} value={name} />
                </label>
                Price:
                <input type="text" name='price' onChange={handleChange} value={price} />
                Image Url Link:
                <input type="text" name='image_url' onChange={handleChange} value={image_url} />
                Model Number:
                <input type="text" name='model_num' onChange={handleChange} value={model_num} />

                <button type="submit">Submit</button>

            </form>

        </div>

    );

}


export default NewWatch; 