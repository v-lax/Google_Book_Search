import React, {useState} from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import SearchJumbotron from "../components/SearchJumbotron/index"
import API from "../utils/API"
import BookList from "../components/BookList/index"
import BookListItem from "../components/BookListItem/index"

const Search = () => {
    const [books,setBooks] = useState([]);
    const [bookSearch,setBookSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target 
        setBookSearch(value);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.searchTerms(bookSearch)
           .then(res=>{
               setBooks(res.data.items)
           })
           .catch(err => console.log(err))
    }

    return(
    <>
        <Jumbotron 
        title="(React) Google Book Search" 
        sentence="A place for you to search for books your friends/family have told you about!"
        />
        <SearchJumbotron onChange={handleInputChange} onClick={handleFormSubmit}/>
        <BookList>
            {   books.length===0 ?(
                <h1>No Books found. Sorry. </h1>
            ):(
                books.map(book => {
                    return(
                        <BookListItem
                            title={book.volumeInfo.title}
                            image={book.volumeInfo.imageLinks.smallThumbnail}
                            authors={book.volumeInfo.authors}
                            publishedDate={book.volumeInfo.publishedDate}
                            description={book.volumeInfo.description}
                            previewLink={book.volumeInfo.previewLink}
                        />
                    );
                })
            )
            }
        </BookList>
    </>
    )
}

export default Search; 