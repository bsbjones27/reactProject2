import React from "react"
import "./ImageSearch.css"

//functional component, in functional component the this keyword does not work
const ImageSearch = (props) => {

    return(
        <div className="imageSearch">
            {/* name attribute is used to grab search value*/}
            <form onSubmit={props.handleGetRequest} className="imageSearch__form">
                <input type="text" autoComplete="off" name="searchValue" placeholder="Search for Images" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch