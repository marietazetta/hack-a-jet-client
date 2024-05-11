import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './AircraftCard.css'



const AircraftCard = ({ id, model, description, main_image }) => {

    return (
        <>

            <Link to={`/aircrafts/${id}`}>

                <div className="AircraftCard">

                    <Card >
                        <Card.Img variant="top" src={main_image} />
                        <Card.Body>
                            <Card.Title>{model}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

            </Link>


        </>
    )
}

export default AircraftCard