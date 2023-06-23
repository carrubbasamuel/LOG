import { Col, Container, Row } from "react-bootstrap";
import Nav from "./Nav/nav";
import "./home.css";


export default function Home({ relationalData, handleLogout }) {

  return (
    <>
      <Nav handleLogout={handleLogout} />
      {relationalData && (
        <Container>
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="mt-4">Benvenuto {relationalData[0].nome}</h1>
              <img
                className="rounded-circle img-fluid profilo mt-5"
                src={relationalData[0].imgProfile}
                alt="immagine profilo"
              />
            </Col>
          </Row>
          <Row>
            <Col
              md={3}
              className="d-flex justify-content-center align-items-center gap-2 m-5"
            >

              //!!! AGGIUNGERE FUNCTION ADDIMG !!!
             {/*  {relationalData.img.map((element, index) => (
                <img
                  key={index}
                  className="img-fluid mt-5 rounded"
                  src={element}
                  alt="immagine profilo"
                />
              ))} */}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
