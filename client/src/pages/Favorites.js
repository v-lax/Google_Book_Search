import React, {useState, useEffect} from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import API from "../utils/API"
import BookList from "../components/BookList/index"
import BookListItem from "../components/BookListItem/index"

const Favorites = () =>{
    const [favBooks,setFavBooks] = useState([]);
    
    useEffect(()=>{
        loadBooks();
    },[])


    function loadBooks(){
        API.getBooks()
           .then(res=>{
               setFavBooks(res.data)
           })
           .catch(err=>console.log(err))
    }

    return(
        <>
        
        <Jumbotron title=" Welcome to your favorites page!"/>
        <BookList>
            {   favBooks.length===0 ?(
                <h1>You have no saved books!</h1>
            ):(
                favBooks.map((book)=>{
                    return(
                        <BookListItem
                            key={book._id}
                            title={book.title}
                            image={book.image}
                            authors={book.authors}
                            description={book.description}
                            loadBooks={loadBooks}
                            id={book._id}
                        />
                    )
                })
            )
            }
        </BookList>
        
        </>
    )
}

export default Favorites; 