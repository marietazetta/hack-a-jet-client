import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Spinner, Row, ListGroup, Button } from "react-bootstrap"
import AircraftCarousel from "../../components/AircraftCarousel/AircraftCarousel"
import { useParams, Link } from "react-router-dom"
import ModalDelete from "../../components/ModalDelete/ModalDelete"




const API_URL = import.meta.env.VITE_API_URL

const AircraftDetailsPage = () => {

    const [aircraft, setAircraft] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [show, setShow] = useState(false)
    const { aircraftId } = useParams()
    const { operatorId } = useParams()

    const handleClose = () => setShow(false)
    const showConfirmModal = () => setShow(true)

    useEffect(() => {
        loadAircraft()
    }, [])


    const loadAircraft = () => {
        axios
            .get(`${API_URL}/aircrafts/${aircraftId}`)
            .then(({ data }) => {
                setAircraft(data)
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }


    return (

        <div className="AircraftDetails mt-5">
            {
                isLoading
                    ?
                    <Spinner animation="grow" variant="dark" />
                    :
                    <Row className="mb-3">

                        <Col md={{ span: 6 }}>

                            <AircraftCarousel images_url={aircraft.images_url} />

                        </Col>

                        <Col md={{ span: 6 }}>

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
                                <Button className="custom-color-button">Back</Button>
                            </Link>

                            <Button onClick={showConfirmModal} className="custom-color-button">Delete</Button>

                            <Link to={`/aircrafts/edit/${aircraftId}`}>
                                <Button className="custom-color-button">Edit</Button>
                            </Link>

                        </Col>

                    </Row>

            }

            <ModalDelete show={show} handleClose={handleClose} aircraftId={aircraftId} operatorId={operatorId} />

        </div >

    )
}
export default AircraftDetailsPage