import { Carousel, Col, Row, Image, Card } from "react-bootstrap"
import './AircraftCarousel.css'

const AircraftCarousel = ({ images_url, model }) => {

    return (
        <>

            <div className="AircraftCarousel">

                <Row>
                    <Col>

                        <Card>

                            <Card.Body style={{ width: '100%' }}>
                                <Carousel>
                                    {images_url.map((image, index) => (
                                        <Carousel.Item key={index}>

                                            <Image className="d-block w-100"
                                                src={image}
                                                alt={model} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    )
}
export default AircraftCarousel