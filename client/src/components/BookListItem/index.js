import React from "react";
import { Container, Row, Col } from "../Grid/index"

const BookListItem = ({title,image,authors,publishedDate,description,previewLink}) => {
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
                    <button type="button" className="btn btn-primary">Save</button>
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