import axios from "axios";
// eslint-disable-next-line
export default {
    searchTerms: function(query){
        return axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
        )
    },
    saveBook:function(bookData){
        console.log('trying to save a book.')
        return axios.post("/api/books",bookData)
    }
};

