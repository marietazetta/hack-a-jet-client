import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Form, Row, Button, Col, InputGroup, Container } from "react-bootstrap"

const API_URL = "http://localhost:5005"

const EditAircraftPage = () => {

    const [aircraft, setAircraft] = useState({
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

    })

    const [servicesData, setServicesData] = useState({
        flight_attendant: false,
        wifi: false,
        telephone: false,
    })



    const navigate = useNavigate()

    useEffect(() => {
        loadFormData()
    }, [])


    const { aircraftId } = useParams()

    const loadFormData = () => {
        axios
            .get(`${API_URL}/aircrafts/${aircraftId}`)
            .then(({ data }) => {
                setAircraft(data)
                setServicesData(data.services)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setAircraft({
            ...aircraft,
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

        const aircraftEdit = {
            ...aircraft,
            services: servicesData
        }

        axios
            .put(`${API_URL}/aircrafts/${aircraftId}`, aircraftEdit, servicesData)
            .then(() => navigate(`/aircrafts/${aircraftId}`))
            .catch(err => console.log(err))
    }



    return (

        <Container className="mt-5">

            <Form onSubmit={handleAircraftFormSubmit}>

                <Form.Group className="mb-3" controlId="Model.Input">
                    <Form.Label>Aircraft Model</Form.Label>
                    <Form.Control size="md" type="text" placeholder="Model"
                        name="model"
                        value={aircraft.model}
                        onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="Manufacturer.Input">
                    <Form.Label>Manufacturer</Form.Label>
                    <Form.Control size="md" type="text" placeholder="Manufacturer"
                        name="manufacturer"
                        value={aircraft.manufacturer}
                        onChange={handleInputChange} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="Registration.Input">
                        <Form.Label>Registration</Form.Label>
                        <Form.Control type="text" placeholder="Ex. EC-MRL"
                            name="registration"
                            value={aircraft.registration}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="YearOfMake.Input">
                        <Form.Label>Year of Make</Form.Label>
                        <Form.Control type="number" placeholder="Ex. 2023"
                            min={1990}
                            max={2024}
                            name="yom"
                            value={aircraft.yom}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="paxCapacity.Input">
                        <Form.Label>Passenger Capacity</Form.Label>
                        <Form.Control type="number" placeholder="10"
                            min={1}
                            max={25}
                            name="pax_capacity"
                            value={aircraft.pax_capacity}
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
                        value={aircraft.main_image}
                        onChange={handleInputChange} />
                </InputGroup>



                <Row className="mb-3">
                    <Form.Group as={Col} controlId="range.input">
                        <Form.Label>Range</Form.Label>
                        <Form.Control type="number" placeholder="Km"
                            name="range"
                            value={aircraft.range}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="homebase.input">
                        <Form.Label>Homebase</Form.Label>
                        <Form.Control type="text" placeholder="Ex. LEMD"
                            name="homebase"
                            value={aircraft.homebase}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="catering.input" >
                        <Form.Label>Catering</Form.Label>
                        <Form.Select aria-label="Default select example"
                            name="catering"
                            onChange={handleInputChange}
                            value={aircraft.catering}>
                            <option>Select an option</option>
                            <option >Drinks</option>
                            <option >Cold Catering</option>
                            <option >Hot Catering</option>
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
                        value={aircraft.description}
                        onChange={handleInputChange} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit Changes
                </Button>
            </Form>

            <Link to="/aircrafts">Back to your fleet</Link>

        </Container>


    )

}

export default EditAircraftPage