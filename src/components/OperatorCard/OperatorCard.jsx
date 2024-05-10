import { Link } from "react-router-dom"
import { Card, Container } from 'react-bootstrap'
import './OperatorCard.css'

const OperatorCard = ({ company, logo, id }) => {






    return (
        <>
            <Link to={`/operators/${id}`}>
                <div className="OperatorCard">
                    <h2>
                        <Container>
                            <Card>
                                <Card.Img variant="top" src="./src\assets\HackAJet.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        {company}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </h2>

                </div>
            </Link>

        </>

    )
}

export default OperatorCard