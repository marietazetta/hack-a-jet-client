import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Form, Row, Button, Col, InputGroup, Spinner } from "react-bootstrap"
import './EditMembershipForm.css'

const API_URL = import.meta.env.VITE_API_URL


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

    const [isLoading, setIsloading] = useState(true)

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
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setOperatorData({
            ...operatorData,
            [name]: value
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

        const operatorDataEdit = {
            ...operatorData,
            services: servicesData
        }

        axios
            .put(`${API_URL}/operators/${operatorId}`, operatorDataEdit, servicesData)
            .then(() => {
                navigate(`/operators/${operatorId}`)
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }


    return (

        <div className="EditOperatorPage">
            {
                isLoading
                    ?
                    <Spinner animation="grow" variant="dark" />
                    :
                    <Form className="EditMembershipForm" onSubmit={handleOperatorFormSubmit}>
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

                        <Button className="custom-color-button" variant="dark" type="submit">
                            Submit
                        </Button>

                        <Link to="/operators">
                            <Button variant="secondary" size="md" className="custom-color-button">
                                Back
                            </Button></Link>
                    </Form>

            }
        </div>


    )
}

export default EditMembershipForm