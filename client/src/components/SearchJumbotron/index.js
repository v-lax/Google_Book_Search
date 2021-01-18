import React from "react";

const SearchJumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Book Search</h1>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>
                </div>
            </div>
    )
}

export default SearchJumbotron;