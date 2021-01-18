import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import SearchJumbotron from "../components/SearchJumbotron/index"

const Search = () => {
    return(
    <>
        <Jumbotron 
        title="(React) Google Book Search" 
        sentence="A place for you to search for books your friends/family have told you about!"
        />
        <SearchJumbotron/>
    </>
    )
}

export default Search; 