import { Link } from "react-router-dom"
import { Card, Container } from 'react-bootstrap'
import './OperatorCard.css'

const OperatorCard = ({ company, logo, id }) => {


    return (
        <div className="OperatorCard mt-5">
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
        </div>

    )
}

export default OperatorCard