import { useEffect, useState } from "react"
import AircraftCard from "../AircraftCard/AircraftCard"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

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


            <Container className="mt-5">
                <h2>Esto es el layout de AIRCRAFTS</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, magnam rerum quos voluptas labore provident velit porro temporibus eaque maiores, commodi blanditiis possimus. Et harum voluptas magnam soluta ad quam!</p>

                <hr />

                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <h3>Algo de info</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae. Sint corporis ad quidem distinctio eveniet! Minima, quod vero libero aliquid incidunt porro hic rerum, fuga maiores eius consequatur nobis?</p>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <h3>Extraaaaaa</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae. Sint corporis ad quidem distinctio eveniet! Minima, quod vero libero aliquid incidunt porro hic rerum, fuga maiores eius consequatur nobis?</p>
                    </Col>
                </Row>

                <hr />

                <h2>Galería</h2>

                <Row>

                    {
                        aircrafts &&
                        aircrafts.map(elm => {

                            return (

                                <Link key={elm.id}>

                                    <div>

                                        <Col md={{ span: 6 }} className="mb-5">

                                            <AircraftCard />

                                        </Col>
                                    </div>

                                </Link>

                            )
                        })
                    }

                </Row>

            </Container>









        </div>
    )
}

export default AircraftsList