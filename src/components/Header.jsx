import React from 'react';

const Header = () => {
    return (
        <header>
            <div 
                className="p-5 text-center bg-image mb-4" 
                style={{
                    backgroundImage: 'url("https://www.travelnews.ch/assets/images/0/Pizza_Ranking-bbf0846c.webp")' , 
                    height: '400px',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    margin: '0'
                }}
            >
                <div>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">La Mía Pizza Restorante</h1>
                            <h4 className="mb-3">¡Tenemos las mejores pizzas de la ciudad!</h4>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

