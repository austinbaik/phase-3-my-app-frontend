import React, { useEffect, useState } from "react";
import './App.css';
import NewWatch from './NewWatch'

//rendered the individual watch cards for a given brand.id 

function Brand(){
    return(

        <div>

            
        <h1>"Watches"</h1>

        <NewWatch /> 

        </div>
    );


}


export default Brand; 