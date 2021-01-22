import React from "react";
import "./style.css";

function Search(props) {
    return (
        <>
        <div class="container">
        <strong>Search:</strong> <input name="keyword" value= {props.keyword} onChange= {props.handleOnChange} id="Search"/>
        </div>
        </>
    );
}

export default Search;