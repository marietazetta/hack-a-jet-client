import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Form, Row, Button, Col, InputGroup } from "react-bootstrap"

const API_URL = "http://localhost:5005"


const EditMembershipForm = () => {

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

    useEffect(() => {
        loadFormData()
    }, [])


    const { operatorId } = useParams()

    const loadFormData = () => {
        axios
            .get(`${API_URL}/operators/${operatorId}`)
            .then(({ data }) => {
                setOperatorData(data)
                setServicesData(data.services)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setOperatorData({
            ...operatorData,
            [name]: value,
        })
    }

    const handleServiceSelect = event => {
        const { value, checked } = event.target
        setServicesData({
            ...servicesData,
            [value]: checked
        })

    }

    const handleOperatorFormSubmit = e => {

        e.preventDefault()

        const operatorData = {
            ...servicesData,
            services: servicesData
        }

        axios
            .put(`${API_URL}/operators/${operatorId}`, operatorData, servicesData)
            .then(() => navigate(`/operators/${operatorId}`))
            .catch(err => console.log(err))
    }


    return (

        <div className="EditOperatorPage">


            <Form onSubmit={handleOperatorFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="company"
                            placeholder="Ex. NetJets"
                            value={operatorData.company}
                            onChange={handleInputChange}
                            disabled
                            readOnly />
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
                        onChange={handleServiceSelect}
                    />
                    <Form.Check
                        value="lounge"
                        type="checkbox"
                        name="lounge"
                        checked={servicesData.lounge}
                        label="Lounge"
                        onChange={handleServiceSelect}
                    />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Agree to the terms and conditions" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>

        </div>


    )
}

export default EditMembershipForm