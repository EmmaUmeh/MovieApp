
import React from "react";
import { Container } from "react-bootstrap";

const SearchComponent = () => {
    return(
        <div className="SearchContainer">
        <Container>
           <div className="Searchchild">
                    <div>
                        <span>Search</span>
                    </div>
                <div className="inputbox">
                    <input type="text"/>
                </div>
           </div>
        </Container>
        </div>
    )
}



export default SearchComponent;