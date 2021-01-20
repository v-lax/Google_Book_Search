import React from "react";
import { Container, Row, Col } from "../Grid/index";
import API from "../../utils/API";

const BookListItem = ({id,title,image,authors,publishedDate,description,previewLink,onClick}) => {
    
    const saveBook = () =>{
        console.log("save a book")
        API.saveBook({
            id:id,
            title:title,
            authors:authors,
            description:description,
            image:image,
            bookLink:previewLink
        }).then(result=>{
            console.log(result)
        }).catch(err=>console.log(err))
    }

    return (
        <div className="card">
        <Container>
            <Row>
                <Col size="xs-8 sm-9">
                    <h1>{title}</h1>
                    <h3>{authors}</h3>
                    <p>{publishedDate}</p>
                </Col>
                <Col size="xs-4 sm2">
                    <a href={previewLink} className="btn btn-primary">View</a>
                    <button onClick = {saveBook} type="button" className="btn btn-primary">Save</button>
                </Col>
            </Row>
            <Row>
                <Col size="xs-4 sm-2">
                <img src={image} alt="book" className="img-thumbnail"/>
                </Col>
                <Col size="xs-8 sm-9">
                    <p>
                        {description}
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default BookListItem