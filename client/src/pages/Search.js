import React, {useState,useEffect} from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import SearchJumbotron from "../components/SearchJumbotron/index"
import API from "../utils/API"

const Search = () => {
    const [searchState,setSearchState] = useState({
        term:"",
        searchList:[],
    });

    useEffect(()=>{
        if(!searchState.term){
            return;
        }

        API.searchTerms(searchState.term.trim())
    },[])
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