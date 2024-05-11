import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Container, Row, ListGroup } from "react-bootstrap"
import { useParams } from "react-router-dom"


const API_URL = "http://localhost:5005"

const AircraftDetails = () => {

    const [aircraft, setAircraft] = useState([])

    const { aircraftId } = useParams()

    useEffect(() => {
        loadAircraft()
    }, [])


    const loadAircraft = () => {
        axios
            .get(`${API_URL}/aircrafts/${aircraftId}`)
            .then(({ data }) => setAircraft(data))
            .catch(err => console.log(err))
    }


    return (
        <div className="AircraftDetails">
            <Container className="mt-5">

                <Row>

                    <Col md={{ span: 6 }}>
                        <img
                            src={aircraft.images}
                            alt={aircraft.model}
                        />
                    </Col>

                    <Col md={{ span: 6 }}>

                        <h2>{aircraft.model}</h2>
                        <h5>{aircraft.manufacturer}</h5>
                        <h6>Homebase: {aircraft.homebase}</h6>
                        <Row>
                            <p>Year of Make - {aircraft.yom}</p>
                            <p>Registration: {aircraft.registration}</p>
                        </Row>
                        <p>Passenger Capacity: {aircraft.pax_capacity}</p>
                        <p>Range: {aircraft.range}</p>
                        <p>Catering: {aircraft.catering}</p>

                        <ListGroup>

                            <p>Services</p>
                            <ul>
                                <li>Flight Attendant: {aircraft.services?.flight_attendant ? " Included " : "Not included"}</li>
                                <li>Wi-Fi: {aircraft.services?.wifi ? " Included " : "Not included"}</li>
                                <li>Telephone: {aircraft.services?.telephone ? " Included " : "Not included"}</li>

                            </ul>

                        </ListGroup>

                    </Col>

                </Row>

            </Container>


        </div >
    )
}
export default AircraftDetails