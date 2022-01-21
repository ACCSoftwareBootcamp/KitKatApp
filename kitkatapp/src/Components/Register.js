import NavBar from "./Navbar";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {
    return(
        <div>
        <NavBar /> 
        <Container fluid>
        <Row className="row1">
            <Col id="login-banner">
                <span>
            <img id="kitcat" src="Assets/kitcat.png" alt="Kit Cat Logo"/>  
            </span>
            <span>          
            <h1>Kit Kat Corner - Sign Up!</h1>
            </span>    
            </Col>
        </Row>

    <Row>
        <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Username</Form.Label>
<Form.Control type="email" placeholder="Create Username" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Create Password" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Confirm Password</Form.Label>
<Form.Control type="password" placeholder="Repeat Password" />
</Form.Group>

<Button variant="primary" type="submit">
Sign Up
</Button>
</Form>
</Row>

<Row>
<p>Already have an account? <a href="/Login">Login</a></p> 
</Row>
</Container>
</div>
    )
}

export default Register;