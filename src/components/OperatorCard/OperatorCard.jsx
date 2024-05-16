import { Card } from 'react-bootstrap'
import './OperatorCard.css'

const OperatorCard = ({ company, logo, description }) => {

    return (
        <div className="OperatorCard mt-5 mb-3">
            <Card >
                <Card.Img className='imgCardOperator' src={logo} />
                <Card.Body>
                    <Card.Text as="h3">
                        {company}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default OperatorCard