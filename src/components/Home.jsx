import React, { useState} from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import Cart from './Cart'
import { Container, Row, Col } from 'react-bootstrap'
import { pizzaCart, pizzas } from '../data/pizzas'

export default function Home() {
    const [cart, setCart] = useState(pizzaCart || [])

    const agregarAlCarrito = (pizza) => {
        const existingPizza = cart.find(item => item.name === pizza.name)
        if (existingPizza) {
            setCart(cart.map(item =>
                item.name === pizza.name
                    ? { ...item, count: item.count + 1 }
                    : item
            ))
        } else {
            setCart([...cart, { ...pizza, count: 1 }])
        }
    }

    const sumarCantidad = (index) => {
        const newCart = [...cart]
        newCart[index].count += 1
        setCart(newCart)
    }

    const restarCantidad = (index) => {
        const newCart = [...cart]
        if (newCart[index].count > 1) {
            newCart[index].count -= 1
        } else {
            newCart.splice(index, 1)
        }
        setCart(newCart)
    }
    return (
        <>
            <Header/>
            <Container fluid className="productos my-5 border-warning">
                <Row className="cards d-flex margin-cards">
                    {pizzas.map((pizza, index) => (
                        <Col key={index} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                            <CardPizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                                addCart={() => agregarAlCarrito(pizza)}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Cart 
                cart={cart}
                onSuma={sumarCantidad}
                onResta={restarCantidad}
            />
                       
        </>
    )
}



// import React from "react";
// import Header from "./Header";
// import CardPizza from './CardPizza';


// const Home = () => {
//     return (
//         <div className="container-fluid p-0">
//             <Header />
//             <div className="row">
//                 <div className="col-12 col-md-4">
//                     <CardPizza
//                         name="Pizza Napolitana"
//                         price={5950}
//                         ingredients={["mozarella", "tomates", "jamon", "oregano"]}
//                         img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"  
//                     />
//                 </div>
//                 <div className="col-12 col-md-4">
//                     <CardPizza
//                         name="Pizza Española"
//                         price={6950}
//                         ingredients={["mozarella", "gorgonzola", "parmesano", "provolone"]}
//                         img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
// m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
// a1c6-8c57bc388fab"
//                     />
//                 </div>
//                 <div className="col-12 col-md-4">
//                     <CardPizza
//                         name="Pizza Pepperoni"
//                         price={7950}
//                         ingredients={["mozarella", "pepperoni", "oregano"]}
//                         img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
// m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
// ac54-90f6c31eb3e3"
//                     />
//                 </div>
//             </div>
//         </div>
//     ) 
// }

// export default Home;