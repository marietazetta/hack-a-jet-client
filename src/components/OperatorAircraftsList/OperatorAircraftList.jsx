import axios from "axios"
import { useState, useEffect } from "react"
import AircraftCard from "../AircraftCard/AircraftCard"
import { Row, Col, Spinner } from "react-bootstrap"

const API_URL = import.meta.env.VITE_API_URL
const embed = "?_embed=aircrafts"

const OperatorAircraftList = ({ operatorId }) => {

    const [aircraft, setAircraft] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        loadAircraft()
    }, [operatorId])


    const loadAircraft = (id) => {
        axios
            .get(`${API_URL}/operators/${(operatorId)}${embed}`)
            .then(({ data }) => {
                setAircraft(data.aircrafts)
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="AircraftDetails">
            {
                isLoading
                    ?
                    <Spinner animation="grow" variant="dark" />
                    :
                    <Row>
                        {
                            aircraft.map(elm => {

                                return (
                                    <Col md={{ span: 6 }} className="mb-5" key={elm.id}>

                                        <AircraftCard {...elm} />

                                    </Col>
                                )
                            })
                        }
                    </Row>
            }

        </div >
    )
}

export default OperatorAircraftList