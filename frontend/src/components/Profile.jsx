import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import {Card, Button, Container} from 'react-bootstrap'

const Profile = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center my-5 py-5">
    <Card className='cart my-5'>
        <Card.Header>
            <Card.Title className='text-center p-2'>🔓 Tu Perfil</Card.Title>
        </Card.Header>
        <Card.Body className='text-center'>
            <Card.Text>
              {/* <h3>usuario.correo@email.com</h3> */}
              <p>Correo: usuario@dominio.com</p>
              <p>Historial de Pedidos</p>
              <p>Información de Pago</p>
            </Card.Text>
        </Card.Body>
        <div>
          <Link to='/'>
            <Card.Footer className='p-3'>
                
                <div className="card-btn d-flex gap-2 ">
                  
                  <button type="submit" className="btn btn-outline-warning mt-3 fw-bold">Cerrar Seción</button>
                
                </div>
            </Card.Footer> 
          </Link>
        </div>
    </Card>
</Container>
  );
};
export default Profile;
