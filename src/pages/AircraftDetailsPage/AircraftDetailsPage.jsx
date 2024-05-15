import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Spinner, Row, ListGroup, Button } from "react-bootstrap"
import { useParams, useNavigate, Link } from "react-router-dom"


const API_URL = "http://localhost:5005"

const AircraftDetailsPage = () => {

    const [aircraft, setAircraft] = useState([])
    const [isLoading, setIsloading] = useState([])
    const { aircraftId } = useParams()

    useEffect(() => {
        loadAircraft()
    }, [])

    const navigate = useNavigate()

    const loadAircraft = () => {
        axios
            .get(`${API_URL}/aircrafts/${aircraftId}`)
            .then(({ data }) => {
                setAircraft(data)
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }

    const deleteAircraft = () => {
        axios
            .delete(`${API_URL}/aircrafts/${aircraftId}`)
            .then(() => navigate('/aircrafts'))
            .catch((error) => console.log(error))
    }

    return (

        <div className="AircraftDetails mt-5">
            {
                isLoading
                    ?
                    <Spinner animation="grow" variant="dark" />
                    :
                    <Row>

                        <Col md={{ span: 4 }}>
                            <img
                                src={aircraft.images_url}
                                alt={aircraft.model}
                            />
                        </Col>

                        <Col md={{ span: 8 }}>

                            <h2>{aircraft.model}</h2>
                            <h5>{aircraft.manufacturer}</h5>
                            <h6>Homebase: {aircraft.homebase}</h6>
                            <p>Year of Make - {aircraft.yom}</p>
                            <p>Registration: {aircraft.registration}</p>
                            <p>Passenger Capacity: {aircraft.pax_capacity}</p>
                            <p>Range: {aircraft.range}</p>
                            <p>Catering: {aircraft.catering}</p>

                            <hr />

                            <h3>Services</h3>

                            <ListGroup>

                                <ListGroup.Item>Flight Attendant: {aircraft.services?.flight_attendant ? " Included " : "Not included"}</ListGroup.Item>
                                <ListGroup.Item>Wi-Fi: {aircraft.services?.wifi ? " Included " : "Not included"}</ListGroup.Item>
                                <ListGroup.Item>Telephone: {aircraft.services?.telephone ? " Included " : "Not included"}</ListGroup.Item>

                            </ListGroup>


                            <Link to="/aircrafts" >
                                <Button variant="outline-secondary">Back</Button>
                            </Link>

                            <Link to="/aircrafts" >
                                <Button onClick={
                                    deleteAircraft} variant="outline-secondary">Delete</Button>
                            </Link>

                            <Link to={`/aircrafts/edit/${aircraftId}`}>
                                <Button variant="outline-secondary">Edit</Button>
                            </Link>

                        </Col>

                    </Row>

            }
        </div >

    )
}
export default AircraftDetailsPage