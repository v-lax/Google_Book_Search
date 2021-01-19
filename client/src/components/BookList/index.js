import React from "react";

const BookList = ({children}) => {
    return(
        <ul className="list-group">{children}</ul>
    );
}

export default BookList;