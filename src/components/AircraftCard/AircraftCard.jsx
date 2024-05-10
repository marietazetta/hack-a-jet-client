import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"


const AircraftCard = ({ id, model }) => {

    return (
        <>

            <Link to={`/aircrafts/${id}`}>

                <div className="AircraftCard">

                    <Card >
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{model}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

            </Link>


        </>
    )
}

export default AircraftCard