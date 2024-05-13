import axios from "axios";
import { useState } from "react"
import { Form, Row, Col, Button, Container, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005"


const MembershipForm = () => {

    const [operatorData, setOperatorData] = useState({
        id: '',
        company: '',
        logo: '',
        description: '',
    })


    const [servicesData, setServicesData] = useState({
        lounge: false,
        transfer: false,
    })


    const navigate = useNavigate()

    const handleInputChange = event => {
        const { name, value } = event.target
        setOperatorData({ ...operatorData, [name]: value })
    }

    const handleServices = e => {
        const { value, checked } = e.target
        setServicesData({
            ...servicesData, [value]: checked
        })
    }


    const handleOperatorFormSubmit = e => {

        e.preventDefault()

        const operator = {
            ...operatorData,
            services: servicesData
        }

        axios
            .post(`${API_URL}/operators`, operator)
            .then(() => navigate('/operators'))
            .catch(err => console.log(err))
    }






    return (
        <Container key={operatorData.id}>
            <Form onSubmit={handleOperatorFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="company"
                            placeholder="Ex. NetJets"
                            value={operatorData.company}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Logo</Form.Label>
                        <Form.Control
                            type="text"
                            name="logo"
                            placeholder="Insert Image"
                            value={operatorData.logo}
                            onChange={handleInputChange} />
                    </Form.Group>
                </Row>

                <InputGroup>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <Form.Control as="textarea"
                        aria-label="With textarea"
                        name="description"
                        value={operatorData.description}
                        onChange={handleInputChange} />
                </InputGroup>

                <Form.Group className="mb-3">
                    <Form.Label>Services</Form.Label>
                    <Form.Check

                        value="transfer"
                        type="checkbox"
                        name="transfer"
                        checked={servicesData.transfer}
                        label="Transfer service"
                        onChange={handleServices}
                    />
                    <Form.Check
                        value="lounge"
                        type="checkbox"
                        name="lounge"
                        checked={servicesData.lounge}
                        label="Lounge"
                        onChange={handleServices}
                    />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Agree to the terms and conditions" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </Container >

    )
}

export default MembershipForm