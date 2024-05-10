import { Container, Row, Col } from "react-bootstrap"
import AircraftsList from "../../components/AircraftsList/AircraftsList"

const AircraftsPage = () => {

    return (

        <div className="AircraftsPage">

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

                <AircraftsList />

            </Container>

        </div>

    )
}

export default AircraftsPage