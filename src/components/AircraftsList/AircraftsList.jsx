import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import AircraftCard from "../AircraftCard/AircraftCard"
import axios from "axios"


const API_URL = "http://localhost:5005"

const AircraftsList = () => {

    const [aircrafts, setAircrafts] = useState([])

    useEffect(() => {
        loadAircrafts()
    }, [])


    const loadAircrafts = () => {
        axios
            .get(`${API_URL}/aircrafts`)
            .then(({ data }) => setAircrafts(data))
            .catch(err => console.log(err))
    }

    return (

        <div className="AircraftsList">

            <Row>
                {aircrafts.map(elm => {

                    return (
                        <Col md={{ span: 6 }} className="mb-5" key={elm.id}>

                            {/* <Link to={'/aircrafts/:aircraftId'}> */}

                            <AircraftCard {...elm} />

                            {/* {</Link>} */}

                        </Col>
                    )
                })
                }
            </Row>

        </div>
    )
}

export default AircraftsList