
import SearchBar from './SeachBar';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return(
        <div>

            <Container fluid>
            <Row className="row1">
                <Col id="intro">
                    <span>
                <img id="kitcat" src="Assets/kitcat.png" alt="Kit Cat Logo"/>  
                </span>
                <span>          
                <h1>Kit Kat Corner</h1>
                <h3>Find, save, and try the 300+ Kit Kat flavors of Japan!</h3>
                </span>    
                </Col>
            </Row>
            
            <Row className="row2">
                <SearchBar />
              </Row>
            </Container>
        </div>
    )
}

export default Home;