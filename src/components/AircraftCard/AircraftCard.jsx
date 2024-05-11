import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './AircraftCard.css'



const AircraftCard = ({ id, model, description, main_image }) => {

    return (
        <>
            <div className="AircraftCard">

                <Card >
                    <Link to={`/aircrafts/${id}`}>
                        <Card.Img variant="top" src={main_image} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{model}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/aircrafts/${id}`}>
                            <Button variant="secondary" size="lg">
                                Details
                            </Button>
                        </Link>
                    </Card.Body>

                </Card>

            </div>



        </>
    )
}

export default AircraftCard