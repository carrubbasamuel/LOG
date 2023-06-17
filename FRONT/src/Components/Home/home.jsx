import { Col, Container, Row } from 'react-bootstrap';
import Nav from "./Nav/nav";


export default function Home({relationalData}) {
    return (
        <>
        
        <Nav />

        <Container>
            <Row>
                <Col>
                    <h1>Benvenuto {relationalData[0].nome}</h1>
                    <img src={relationalData[0].img} alt="immagine profilo" />
                </Col>
            </Row>
        </Container>

        
        </>
    );
    }
