import axios from "axios";
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import './AddMembershipForm.css'

const API_URL = import.meta.env.VITE_API_URL


const AddMembershipForm = () => {

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
            .then(() => {
                navigate('/operators')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="MembershipForm">

            <Form className="AddMembershipForm" onSubmit={handleOperatorFormSubmit}>
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

                <Form.Group className="mb-3" controlId="description.Input">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={2}
                        name="description"
                        value={operatorData.description}
                        onChange={handleInputChange} />
                </Form.Group>

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

                <Button variant="dark" type="submit">
                    Submit
                </Button>

                <Link to="/operators" >
                    <Button variant="dark" type="submit" className="BackButton">
                        Back
                    </Button>
                </Link>

            </Form>


        </div>


    )
}

export default AddMembershipForm