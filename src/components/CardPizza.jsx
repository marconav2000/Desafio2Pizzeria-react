import React from 'react'   
import {Card, Button} from 'react-bootstrap'

const CardPizza = ({name, price, ingredients, img, addCart }) => {
    return (
        <Card className='my-3'>
            <Card.Img variant="top" src={img} />
            <Card.Header>
                <Card.Title>🍕 Pizza {name}</Card.Title>
            </Card.Header>
            <Card.Body className='text-center p-3'>
                <Card.Subtitle className='card-text'><strong>Ingredientes: </strong></Card.Subtitle>
                <Card.Text>
                                  
                    <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="list-inline-item">{ingredient}</li>
                    ))}
                </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer className='p-3'>
                <Card.Title className='card-text text-center p-1'><strong>Precio: </strong> ${price}</Card.Title>
                <div className="card-btn d-flex gap-2 justify-content-around">
                    <Button variant="outline-secondary">Ver más</Button>
                    <Button variant="btn btn-secondary" onClick={addCart}>Añadir 🛒</Button>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default CardPizza
