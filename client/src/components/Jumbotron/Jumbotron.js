import React from 'react';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.sentence}</p>
            </div>
        </div>
    );
}

export default Jumbotron;