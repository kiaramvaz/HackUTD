import React from 'react'
import "./SearchBar.css";

function SearchBar( placeHolder, data) {
    return (
        <div className ="search">
            <div className ="searchInputs">
                <input type= "text" placeHolder = { placeHolder } /> 

                
            </div>
            

            
        </div>
    )
}

export default SearchBar
