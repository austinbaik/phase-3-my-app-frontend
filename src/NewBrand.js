import React, { useEffect, useState } from "react";
import './App.css';

//component for new brand submission form 


function NewBrand({}) {


    const [name, setName] = useState("")
    const [url, setUrl] = useState("")




    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleUrlChange(e) {
        setUrl(e.target.value)
    }


    return(
    <div>

       

        <form onSubmit={handleSubmit}>
            <label>
            Name:
                <input type="text" onChange={handleNameChange} value={name} />
            </label>
            Logo Link:
            <input type="text" onChange={handleUrlChange} value={url} />
            <button type="submit">Submit</button>
        </form>






    </div>
        
    );


}


export default NewBrand; 