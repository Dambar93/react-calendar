import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({title,image,category,price}) => {

    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <small className="text-muted">{category}</small>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <b> {price} $</b>   
                    </Card.Text>
                    
                </Card.Body>
            </Card>
    )
}

export default Item;