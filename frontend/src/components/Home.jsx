import { useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'
import CardPizza from './CardPizza'


export default function Home() {
    //const [cart, setCart] = useState(pizzaCart || [])
    const [pizzas, setPizzas] = useState([])
    const [error, setError] = useState(null)
    
    const getPizzas = async () => {
        try {
            const url = "http://localhost:5000/api/pizzas"
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`)
            }

            const data = await response.json()
            setPizzas(data)

        } catch (err) {
            setError(err.meesage)
        }
    }

    useEffect(() => {
        getPizzas()
    }, [])

  
    
    return (
        <>
            <Header/>
            <Container fluid className="productos my-5 border-warning">
                {error && <p>Error: {error}</p>}
                <Row >
                    {pizzas.map((pizza, index) => (
                        <Col key={index} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                            <CardPizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                                onAddToCart={() => agregarAlCarrito(pizza)}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

           
        </>
    )
}

