import React from 'react';
import '../components/NotFound.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'


const PageNotFound = () => {
  return (
    <Container className="text-center mt-5">
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-3">404</h1>
        <h3 className="bajada lead mb-4">Oh no, ¡parece que la pizza que buscas no está en el horno!</h3>
        <img
          src={ logo }
          alt="Pizza perdida"
          className="mb-4"
          style={{ maxWidth: '500px' }}
        />
        <Button variant="danger" as={Link} to="/" className="mb-2">
          Volver a la página principal
        </Button>
        <p className="text-muted ">O intenta usar el menú para encontrar lo que necesitas.</p>
      </div>
    </Container>
  );
};


export default PageNotFound;