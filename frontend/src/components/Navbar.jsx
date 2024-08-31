import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const total = 25000
    const token = false

    return (
        <nav className="barrauno navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container">
                <a className="navbar-brand p-1">La Mía Pizza Restorante</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/">🍕 Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Login">🔓 Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Register">🔒 Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/">🍕 Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Login">🔐 Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Register">🔐 Register</Link>
                                </li>
                            </>
                        )}
                    </ul>

                    <div className="d-flex align-items-center">
                    <Link to="/Card"> <span className="navbar-text text-light p-2">
                        🛒 Total: ${total.toLocaleString()} </span></Link>
                        
                        {/* <Link to="/cart">
                            <Button variant='outline-info'>
                                🛒Total: ${total.toLocaleString()}
                            </Button>
                        </Link> */}
                    
                    </div>
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar;