import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { RegisterData } from '../API/api';

export default function Register() {

  const handleRegister = (event) => {
    event.preventDefault();
    let email = document.getElementById('mail').value;
    let password = document.getElementById('pass').value;
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let profile = document.getElementById('profile').value;
    const formData = {
      email: email,
      password: password,
      nome: nome,
      cognome: cognome,
      profile: profile,
    };
    console.log(formData);
    RegisterData(formData).then((response) => {
      if (response) {
        console.log(response);
      } else {
        alert("Credenziali errate");
      }
    });
  }


   return (
    <Form className='m-5' onSubmit={handleRegister}>
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control id='mail' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Password</Form.Label>
          <Form.Control id='pass' type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" >
        <Form.Label>Nome</Form.Label>
        <Form.Control id='nome' placeholder="Nome" />
        <Form.Label>Cognome</Form.Label>
        <Form.Control id='cognome' placeholder="Cognome" />
        <Form.Label>Immagine di profilo</Form.Label>
        <Form.Control id='profile' placeholder="URL img profile" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

