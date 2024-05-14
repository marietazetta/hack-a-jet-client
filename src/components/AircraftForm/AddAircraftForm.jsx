import axios from "axios"
import { useState, useEffect } from "react"
import { Form, Row, Col, InputGroup, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { CATERING_SERVICES } from "../../consts/aircraft.consts"


const API_URL = "http://localhost:5005"

const AddAircraftForm = () => {

    const navigate = useNavigate()

    const [aircraftData, setAircraftData] = useState({
        model: '',
        manufacturer: '',
        registration: '',
        yom: 0,
        pax_capacity: 0,
        main_image: '',
        range: 0,
        homebase: '',
        catering: '',
        description: '',
        operatorId: ''
    })

    const [servicesData, setServicesData] = useState({
        flight_attendant: false,
        wifi: false,
        telephone: false,
    })

    const [operators, setOperators] = useState([])

    useEffect(() => getAllOperators(), [])

    const getAllOperators = () => {
        axios
            .get(`${API_URL}/operators`)
            .then(({ data }) => setOperators(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setAircraftData({
            ...aircraftData,
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

    const handleAircraftFormSubmit = e => {
        e.preventDefault()

        const aircraft = {
            ...aircraftData,
            services: servicesData
        }

        axios
            .post(`${API_URL}/aircrafts`, aircraft)
            .then(() => navigate('/aircrafts'))
            .catch(err => console.log(err))
    }


    return (

        <div className="AircraftForm">

            <Form onSubmit={handleAircraftFormSubmit}>

                <Row className="mb-3">

                    <Form.Group as={Col} className="mb-3" controlId="Model.Input">
                        <Form.Label>Aircraft Model</Form.Label>
                        <Form.Control size="md" type="text" placeholder="Model"
                            name="model"
                            value={aircraftData.model}
                            onChange={handleInputChange}
                        />

                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="Operator.Input">
                        <Form.Label>Operator</Form.Label>
                        <Form.Select aria-label="Default select example"
                            name="operator"
                            onChange={handleInputChange}
                            value={aircraftData.operatorId}>
                            <option>Select an option</option>
                            {
                                operators.map(elm => <option value={elm.id}>{elm.company}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="Manufacturer.Input">
                    <Form.Label>Manufacturer</Form.Label>
                    <Form.Control size="md" type="text" placeholder="Manufacturer"
                        name="manufacturer"
                        value={aircraftData.manufacturer}
                        onChange={handleInputChange} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="Registration.Input">
                        <Form.Label>Registration</Form.Label>
                        <Form.Control type="text" placeholder="Ex. EC-MRL"
                            name="registration"
                            value={aircraftData.registration}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="YearOfMake.Input">
                        <Form.Label>Year of Make</Form.Label>
                        <Form.Control type="number" placeholder="Ex. 2023"
                            min={1990}
                            max={2024}
                            name="yom"
                            value={aircraftData.yom}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="paxCapacity.Input">
                        <Form.Label>Passenger Capacity</Form.Label>
                        <Form.Control type="number" placeholder="10"
                            min={1}
                            max={25}
                            name="pax_capacity"
                            value={aircraftData.pax_capacity}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>

                <Form.Label htmlFor="basic-url">Image</Form.Label>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                        Image URL
                    </InputGroup.Text>
                    <Form.Control id="basic-url" aria-describedby="basic-addon3"
                        name="main_image"
                        value={aircraftData.main_image}
                        onChange={handleInputChange} />
                </InputGroup>



                <Row className="mb-3">
                    <Form.Group as={Col} controlId="range.input">
                        <Form.Label>Range</Form.Label>
                        <Form.Control type="number" placeholder="Km"
                            name="range"
                            value={aircraftData.range}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="homebase.input">
                        <Form.Label>Homebase</Form.Label>
                        <Form.Control type="text" placeholder="Ex. LEMD"
                            name="homebase"
                            value={aircraftData.homebase}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="catering.input" >
                        <Form.Label>Catering</Form.Label>
                        <Form.Select aria-label="Default select example"
                            name="catering"
                            onChange={handleInputChange}
                            value={aircraftData.catering}>
                            <option>Select an option</option>
                            {
                                CATERING_SERVICES.map(elm => <option>{elm}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Services</Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Flight Attendant"
                        name="services"
                        value="flight_attendant"
                        checked={servicesData.flight_attendant}
                        onChange={handleServiceSelect}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Wi-Fi"
                        name="services"
                        value="wifi"
                        checked={servicesData.wifi}
                        onChange={handleServiceSelect}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Telephone"
                        name="services"
                        value="telephone"
                        checked={servicesData.telephone}
                        onChange={handleServiceSelect}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description.Input">
                    <Form.Label>Description</Form.Label>
                    <Form.Control size="md" as="textarea" rows={2}
                        name="description"
                        value={aircraftData.description}
                        onChange={handleInputChange} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>

        </div>

    )
}
export default AddAircraftForm