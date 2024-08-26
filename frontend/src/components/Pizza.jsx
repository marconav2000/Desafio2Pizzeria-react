
import { useState, useEffect } from 'react'
import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap'

export const Pizza = () => {
    const [pizza, setPizza] = useState({})
    const [error, setError] = useState(null)
    
    const getPizza = async () => {
        try {
            const url = "http://localhost:5000/api/pizzas/p001"
       
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`)
            }
            const data = await response.json()
            setPizza(data)
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        getPizza()
    }, [])
    

    return (
    <>
        {error ? (
            <p>Error:{error}</p>
        ) : (
            pizza && (
                <Card 
                className="pizza-page mx-auto my-5 p-3" 
                style={{ maxWidth: '1200px' }}
                >
                    <Row>
                      
                        <Col md={6}>
                            <Card.Img
                            src={pizza.img} 
                            alt={pizza.name}
                            
                            />
                        </Col>

                        <Col md={6}>
                            <Card.Body>
                                <Card.Title>🍕 Pizza {pizza.name || "Nombre del producto"}</Card.Title>
                                <Card.Text>
                                {pizza.desc || "Descripción del producto"}
                                </Card.Text>

                               
                                <Card.Subtitle className='SUb-ing card-text'><strong>Ingredientes: </strong></Card.Subtitle>
                                {pizza.ingredients && (
                                <ListGroup variant="flush">
                                    {pizza.ingredients.map((ingredient, index) => (
                                    <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                                )}

                                
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                <h4 className='card-text text-center p-1'><strong>Precio: </strong> ${pizza.price}</h4>
                                <Button variant="btn btn-secondary">Añadir al carrito</Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            )
        )}
    </>
    )
}