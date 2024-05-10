import { useParams } from "react-router-dom"
import { Card, Container } from 'react-bootstrap'

const OperatorCard = ({ company, logo }) => {

    return (
        <>

            <div className="OperatorCard">
                <h2>
                    <Container>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    {company}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </h2>

            </div>

        </>

    )
}

export default OperatorCard