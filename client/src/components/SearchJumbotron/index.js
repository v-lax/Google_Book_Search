import React from "react";

const SearchJumbotron = ({onChange, onClick}) => {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Book Search</h1>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input onChange={onChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button onClick={onClick} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
    )
}

export default SearchJumbotron;