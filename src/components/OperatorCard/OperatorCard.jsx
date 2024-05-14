import { Link } from "react-router-dom"
import { Card, Container } from 'react-bootstrap'
import './OperatorCard.css'

const OperatorCard = ({ company, logo, id }) => {

    return (
        <div className="OperatorCard mt-5">
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Text>
                        {company}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default OperatorCard