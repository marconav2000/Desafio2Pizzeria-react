import React from "react";

const CardPizza = ({name, price, ingredients, img}) => {
    return (
        <div >
            <div className="card mb-4">
                <img src={img} alt={name} className="card-img-top rounded mx-auto d-block" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text"><strong>Ingredientes: </strong></p>                                       
                    <ul className="card-text list-inline">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="list-inline-item">🍕 {ingredient}</li>
                        ))}
                    </ul>
                    <h4 className="card-text text-center p-1"><strong>Precio: </strong>${price.toLocaleString()}</h4> 
                    <div className="d-flex justify-content-evenly">
                        <button className="btn btn-secondary">Ver más</button>
                        <button className="btn btn-secondary">Añadir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPizza;

