import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../../../API/api';
import LoginData from "../../../API/api";
import './form.css';


export default function FormLogin({ setIsLogin ,setRelationalData,}) {
    const [data, setData] = useState([]);


    const handleData = (event) => {
        event.preventDefault();
        let mail = document.getElementById('mail').value;
        let pass = document.getElementById('pass').value;
        const formData = {
            mail: mail,
            pass: pass,
        };
        
        setData(formData);
    }

    useEffect(() => {
        if (data.length === 0) return;
        LoginData(data).then((response) => {
            if (response.success === true) {
                setIsLogin(true);
                setRelationalData(response.data);
                console.log(response.data);
            } else {
                alert("Credenziali errate");
            }
        });

        setData([]);
    }, [data]);



    return (
        <div id='login'>
            <Row>
                <Col>
                    <h1>Login</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Indirizzo Email</Form.Label>
                            <Form.Control id='mail' type="email" placeholder="Inserisci email" />
                        </Form.Group>
                
                        <Form.Group className="mb-3" >

                            <Form.Label>Password</Form.Label>
                            <Form.Control id='pass' type="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={handleData} variant="outline-secondary" type="submit" >
                            Login
                        </Button>
                        <Form.Text id="sing" className="text-muted">
                            Non hai un account? <a href="">Registrati</a>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </div>
    );


}