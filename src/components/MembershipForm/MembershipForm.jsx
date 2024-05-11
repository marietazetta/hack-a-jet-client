import axios from "axios";
import { useState } from "react";
import { Form, Row, Col, Button, Container, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005"


const MembershipForm = () => {

    const [operatorData, setOperatorData] = useState({
        company: '',
        logo: '',
        description: '',
        services: {
            lounge: '',
            transfer: '',
        }
    })

    return (
        <Container>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Ex. NetJets" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Logo</Form.Label>
                        <Form.Control type="text" placeholder="Insert Image" />
                    </Form.Group>
                </Row>


                <InputGroup>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridLounge">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Lounge"
                        />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridTransfer">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Transfer service"
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Agree to the terms and conditions" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    )
}

export default MembershipForm