import axios from "axios"
import { useState, useEffect } from "react"
import AircraftCard from "../AircraftCard/AircraftCard"
import { Row, Col } from "react-bootstrap"

const API_URL = "http://localhost:5005"
const embed = "?_embed=aircrafts"

const OperatorAircraftList = ({ operatorId }) => {

    const [aircraft, setAircraft] = useState([])

    const { aircraftId } = useParams()

    useEffect(() => {
        loadAircraft()
    }, [operatorId])


    const loadAircraft = (id) => {
        axios
            .get(`${API_URL}/operators/${(operatorId)}${embed}`)
            .then(({ data }) => setAircraft(data))
            .catch(err => console.log(err))
    }


    return (
        <div className="AircraftDetails">
            <Row>
                {aircraft.map(elm => {

                    return (
                        <Col md={{ span: 6 }} className="mb-5" key={elm.id}>

                            <AircraftCard {...elm} />

                        </Col>
                    )
                })
                }
            </Row>

        </div >
    )
}

export default OperatorAircraftList