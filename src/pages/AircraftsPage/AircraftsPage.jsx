import { Container, Row, Col } from "react-bootstrap"
import AircraftsList from "../../components/AircraftsList/AircraftsList"
import './AircraftsPage.css'

const AircraftsPage = () => {

    return (

        <div className="AircraftsPage">

            <Container className="mt-5">


                <h3 className="text-center">An iconic global fleet of all aircraft ranges</h3>

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




                <AircraftsList />

            </Container>

        </div>

    )
}

export default AircraftsPage