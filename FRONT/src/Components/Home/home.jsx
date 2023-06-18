import { Col, Container, Row } from "react-bootstrap";
import Nav from "./Nav/nav";
import "./home.css";
import InsertImg from "./inserImg/insertimg";

export default function Home({ relationalData }) {
  console.log(relationalData);
  return (
    <>
      <Nav />
      {relationalData && (
        <Container>
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="mt-4">Benvenuto {relationalData.data[0].nome}</h1>
              <img
                className="rounded-circle img-fluid profilo mt-5"
                src={relationalData.data[0].img}
                alt="immagine profilo"
              />
            </Col>
          </Row>
          <InsertImg />
          <Row>
            <Col
              md={3}
              className="d-flex justify-content-center align-items-center gap-2 m-5"
            >
              {relationalData.img.map((element, index) => (
                <img
                  key={index}
                  className="img-fluid mt-5 rounded"
                  src={element}
                  alt="immagine profilo"
                />
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
