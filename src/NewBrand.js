import React, { useEffect, useState } from "react";
import './App.css';

//component for new brand submission form 


function NewBrand({setBrands}) {


    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/brands", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                url: url
            }),
        })
            .then(response => response.json())
            .then(data => {
                setBrands(brands=>[...brands, data]) //bc setBrands is part of STATE, already has brands included
                //need to send the return object up to App to update State 
                console.log('Success:', data);
                setName("")
                setUrl("")
            })

    }



    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleUrlChange(e) {
        setUrl(e.target.value)
    }


    return(
        <div class="center-box">

            <h2 class="center"> Submit New Brand </h2>

            <form onSubmit={handleSubmit} class="center">
                <label>
                Name: 
                <input type="text" onChange={handleNameChange} value={name} />
                </label>
                <br></br>
                Logo Link: 
                <input type="text" onChange={handleUrlChange} value={url} />
                <br></br>
                <button type="submit">Submit</button>
            </form>

        </div>

    );

}


export default NewBrand; 