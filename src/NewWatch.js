import React, { useEffect, useState } from "react";
import './App.css';

//component for new Watch submission form 


function NewWatch({ brandId, addNewWatchToStateArr }) {


    // console.log('brandId: ', brandId);
    const [name, setName] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [price, setPrice] = useState("")
    const [modelNum, setModelNum] = useState("")

    // const [watchFormData, setWatchFormData] = useState({
    //     name: "",
    //     image_url: "",
    //     price: "",
    //     model_num: "",
    //     brand_id: brandId
    // })

    // const { name, image_url, price, model_num } = watchFormData


    // const handleChange = (e) => {
    //     setWatchFormData({ ...watchFormData, [e.target.name]: e.target.value })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/brands/${brandId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                image_url: image_url,
                price: price,
                model_num: modelNum,
                brand_id: brandId
            })

        })
            .then(response => response.json())
            .then(data => {

                //need to send the return object up to App to update State 
                // console.log('Success:', data);
                addNewWatchToStateArr(data)
                setName("")
                setImageUrl("")
                setPrice("")
                setModelNum("")
                // setWatchFormData(
                //     {
                //         name: "",
                //         image_url: "",
                //         price: "",
                //         model_num: "",
                //         brand_id: brandId
                //     }
                // )
            })

    }



    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleUrlChange(e) {
        console.log('change', e.target.value)
        setImageUrl(e.target.value)
    }
    function handlePriceChange(e) {
        setPrice(e.target.value)
    }
    function handleModelNum(e) {
        setModelNum(e.target.value)
    }


    return (

        <div class="center-box" >

            <h2 class="center-text"> Submit New Watch </h2>
            
            <br></br>

            <form  onSubmit={handleSubmit} class="center-text">

                Name:
                <br></br>
                <input type="text" name='name' onChange={handleNameChange} value={name} />

                <br></br>

                Price:
                <br></br>

                <input type="text" name='price' onChange={handlePriceChange} value={price} />
                <br></br>

                Image Url Link: 
                <br></br>

                <input type="text" name='imageUrl' onChange={handleUrlChange} value={image_url} />

                <br></br>

                Model Number:
                <br></br>

                <input type="text" name='model_num' onChange={handleModelNum} value={modelNum} />

                <br></br>
                <br></br>


                <button type="submit">Submit</button>

            </form>

        </div>

    );

}


export default NewWatch; 